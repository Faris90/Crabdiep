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
const SkimmerBarrelDefinition: BarrelDefinition = {
    angle: Math.PI / 2,
    offset: 0,
    size: 66.526,
    width: 49.578,
    delay: 0,
    reload: 1.5,
    recoil: 0,
    isTrapezoid: false,
    trapezoidDirection: 0,
    addon: "trapLauncher",
    bullet: {
        type: "trap",
        health: 1,
        damage: 2 / 5,
        speed: 0.8,
        scatterRate: 1,
        lifeLength: 1.5,
        sizeRatio: 1,
        absorbtionFactor: 1
    }
};

/**
 * Represents all skimmereer skimmers in game.
 */
export default class TrapSpinner extends Bullet implements BarrelBase {
    /** Default speed the skimmer spins */
    public static BASE_ROTATION = 0.2;

    /** The skimmer's barrels */
    private skimmerBarrels: Barrel[];

    /** The size ratio of the skimmer. */
    public sizeFactor: number;
    /** The camera entity (used as team) of the skimmer. */
    public cameraEntity: Entity;
    /** The reload time of the skimmer's barrel. */
    public reloadTime = 15;
    /** The inputs for when to shoot or not. (skimmer) */
    public inputs: Inputs;

    /** The direction the bullet will rotating in. */
    private rotationPerTick = TrapSpinner.BASE_ROTATION;


    public constructor(barrel: Barrel, tank: BarrelBase, tankDefinition: TankDefinition | null, shootAngle: number, direction: number) {
        super(barrel, tank, tankDefinition, shootAngle);

        this.rotationPerTick = direction;

        this.cameraEntity = tank.cameraEntity;

        this.sizeFactor = this.physicsData.values.size / 50;

        const skimmerBarrels: Barrel[] = this.skimmerBarrels =[];

        const s1 = new class extends Barrel {
            // Keep the width constant
            protected resize() {
                super.resize();
                //this.physicsData.values.width = this.definition.width
                // this.physicsData.state.width = 0;
            }
        }(this, {...SkimmerBarrelDefinition});
        const s2Definition = {...SkimmerBarrelDefinition};
        s2Definition.angle += Math.PI
        const s2 = new class extends Barrel {
            // Keep the width constant
            protected resize() {
                super.resize();
                //this.physicsData.width = this.definition.width
            }
        }(this, s2Definition);

        s1.styleData.values.color = this.styleData.values.color;
        s2.styleData.values.color = this.styleData.values.color;

        skimmerBarrels.push(s1, s2);

        this.inputs = new Inputs();
        this.inputs.flags |= InputFlags.leftclick;
    }

    public tick(tick: number) {
        this.sizeFactor = this.physicsData.values.size / 50;
        this.reloadTime = this.tank.reloadTime;
        this.positionData.angle += this.rotationPerTick;
        super.tick(tick);

        if (this.deletionAnimation) return;
        // Only accurate on current version, but we dont want that
        // if (!Entity.exists(this.barrelEntity.rootParent) && (this.inputs.flags & InputFlags.leftclick)) this.inputs.flags ^= InputFlags.leftclick;
    }
}
