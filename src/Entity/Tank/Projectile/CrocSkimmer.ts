/*
    DiepCustom - custom tank game server that shares diep.io's WebSocket protocol
    Copyright (C) 2022 ABCxFF (github.com/ABCxFF)

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program. If not, see <https://www.gnu.org/licenses/>
*/

import Barrel from "../Barrel";
import Bullet from "./Bullet";

import { InputFlags } from "../../../Const/Enums";
import { BarrelDefinition, TankDefinition } from "../../../Const/TankDefinitions";
import { Entity } from "../../../Native/Entity";
import { Inputs } from "../../AI";
import { BarrelBase } from "../TankBody";

/**
 * Barrel definition for the skimmer skimmer's barrel.
 */
const CrocSkimmerBarrelDefinition: BarrelDefinition = {
    angle: 2.6179938779914944,
    offset: 0,
    size: 70,
    width: 42,
    delay: 0,
    reload: 0.5,
    recoil: 4.5,
    isTrapezoid: false,
    trapezoidDirection: 0,
    addon: null,
    bullet: {
        type: "bullet",
        health: 0.4,
        damage: 3 / 5,
        speed: 1,
        scatterRate: 1,
        lifeLength: 0.4,
        sizeRatio: 1,
        absorbtionFactor: 1
    }
};

/**
 * Represents all skimmereer skimmers in game.
 */
export default class CrocSkimmer extends Bullet implements BarrelBase {
    /** The croc skimmer's barrels */
    private skimmerBarrels: Barrel[];

    /** The size ratio of the skimmer. */
    public sizeFactor: number;
    /** The camera entity (used as team) of the croc skimmer. */
    public cameraEntity: Entity;
    /** The reload time of the skimmer's barrel. */
    public reloadTime = 1;
    /** The inputs for when to shoot or not. (croc skimmer) */
    public inputs: Inputs;


    public constructor(barrel: Barrel, tank: BarrelBase, tankDefinition: TankDefinition | null, shootAngle: number) {
        super(barrel, tank, tankDefinition, shootAngle);

        this.cameraEntity = tank.cameraEntity;

        this.sizeFactor = this.physicsData.values.size / 50;

        const skimmerBarrels: Barrel[] = this.skimmerBarrels =[];

        const s1 = new Barrel(this, {...CrocSkimmerBarrelDefinition});
        const s2Definition = {...CrocSkimmerBarrelDefinition};
        s2Definition.angle = 3.665191429188092
        const s2 = new Barrel(this, s2Definition);

        s1.styleData.values.color = this.styleData.values.color;
        s2.styleData.values.color = this.styleData.values.color;

        skimmerBarrels.push(s1, s2);

        this.inputs = new Inputs();
        this.inputs.flags |= InputFlags.leftclick;
    }

    public tick(tick: number) {
        this.sizeFactor = this.physicsData.values.size / 50;
        this.reloadTime = this.tank.reloadTime;
        super.tick(tick);

        if (this.deletionAnimation) return;
        // Only accurate on current version, but we dont want that
        // if (!Entity.exists(this.barrelEntity.rootParent) && (this.inputs.flags & InputFlags.leftclick)) this.inputs.flags ^= InputFlags.leftclick;
    }
}