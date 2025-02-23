import { Entity, Column, ManyToOne, ManyToMany, JoinColumn } from "typeorm";

import { App, LinkType, Developer } from "@domain/entities";

import { BaseSoftDelete } from "../base";

@Entity()
export class Link extends BaseSoftDelete {
    @Column()
    public url: string;

    @Column()
    public linkTypeId: string;

    @ManyToOne(() => LinkType, (linkType) => linkType.links)
    @JoinColumn({ name: "linkTypeId" })
    public type: LinkType;

    @ManyToMany(() => App, (app) => app.socialLinks)
    public apps: App[];

    @ManyToMany(() => Developer, (dev) => dev.socialLinks)
    public devs: Developer[];
}

