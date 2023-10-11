import { Column, Entity, PrimaryColumn } from 'typeorm';
import { ProjectStatus } from './project-status.enum';
import crypto from 'crypto';

@Entity()
export class Project {
  @PrimaryColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column({ nullable: true, type: 'datetime' })
  started_at: Date | null;
  @Column({ nullable: true, type: 'datetime' })
  cancelled_at: Date | null;
  @Column({ nullable: true, type: 'datetime' })
  forecasted_at: Date | null;
  @Column({ nullable: true, type: 'datetime' })
  finished_at: Date | null;
  @Column({ type: 'simple-enum' })
  status: ProjectStatus = ProjectStatus.Pending;

  constructor(
    props: {
      name: string;
      description: string;
      started_at?: Date;
      cancelled_at?: Date;
      forecasted_at?: Date;
    },
    id?: string,
  ) {
    Object.assign(this, props);
    this.id = id ?? crypto.randomUUID();
  }
}
