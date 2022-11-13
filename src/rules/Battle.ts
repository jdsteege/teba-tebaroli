import createStore from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export enum BattlePage {
  Intro,
  PlayerTurn,
  EnemyTurn,
  Conclusion,
}

export type BattleState = {
  playerBattler: Battler;
  enemyBattler: Battler;
  page: BattlePage;
};

const battleStateDefault: BattleState = {
  playerBattler: {
    maxHealth: 100,
    health: 100,
    damageRange: { min: 5, max: 15 },
  },
  enemyBattler: { maxHealth: 20, health: 20, damageRange: { min: 1, max: 3 } },
  page: BattlePage.Intro,
};

export type Battler = {
  maxHealth: number;
  health: number;
  damageRange: { min: number; max: number };
};
