// /**
//  * @see https://www.codewars.com/kata/63b1c240a4ade100500f665e/train/javascript
//  * @param {number} health
//  * @param {Array<Array<number>>} level
//  */
// export function fight(health, level) {
//   let result = "";
//   let enemyIndex = 0;
//   let heroHealth = health;
//   const metaData = {
//     reg: {
//       cost: 2,
//       letter: "B",
//     },
//     spec: {
//       cost: 4,
//       cooldown: 0,
//       letter: "C",
//     },
//     crit: {
//       cost: 8,
//       cooldown: 0,
//       letter: "A",
//     },
//   };

//   const executeNoAttack = () => {
//     console.log("level antes:", level);

//     result += "-";
//     console.log("No attack attack");
//     console.log("result:", result);
//     console.log("level:", level);
//     console.log("----------------");
//   };

//   const executeRegularAttack = () => {
//     console.log("level antes:", level);

//     result += metaData.reg.letter;
//     level[enemyIndex] = [0, 0];
//     console.log("Regular attack");
//     console.log("result:", result);
//     console.log("level:", level);
//     console.log("----------------");
//   };

//   const executeSpecialAttack = (nextEnemyIndex) => {
//     console.log("level antes:", level);

//     result += metaData.spec.letter;

//     // check how many enemies will be affected by this attack
//     const affectedEnemies = nextEnemyIndex - enemyIndex;

//     // apply the damage to these enemies
//     for (let i = enemyIndex; i < enemyIndex + affectedEnemies; i++) {
//       level[i] = [0, 0];
//     }

//     metaData.spec.cooldown = 3;
//     console.log("Special attack");
//     console.log("result:", result);
//     console.log("level:", level);
//     console.log("----------------");
//   };

//   const executeCriticalAttack = () => {
//     console.log("level antes:", level);

//     result += metaData.crit.letter;

//     let damage = 8;
//     let chainIndex = enemyIndex;

//     // chain the enemies
//     while (true) {
//       const enemyLife = level[chainIndex][0] - damage;
//       level[chainIndex] = [enemyLife > 0 ? enemyLife : 0, level[chainIndex][1]];

//       // for each enemy, reduce the damage
//       damage = damage - damage / 2;
//       chainIndex++;

//       if (damage < 1 || chainIndex == level.length) break;
//     }

//     metaData.crit.cooldown = 3;
//     console.log("Critical attack");
//     console.log("result:", result);
//     console.log("level:", level);
//     console.log("----------------");
//   };

//   const getEnemiesNextAtackCost = () => {
//     let nextAttackCost = level[enemyIndex][0];
//     let nextEnemyIndex = enemyIndex + 1;

//     if (level[enemyIndex][1] >= heroHealth)
//       return [nextAttackCost, nextEnemyIndex];

//     // iterate the enemies health to get the next attack
//     while (
//       nextEnemyIndex !== level.length &&
//       level[nextEnemyIndex][0] !== 0 &&
//       nextAttackCost < 8
//     ) {
//       const [nextHealthEnemy, nextAttackEnemy] = level[nextEnemyIndex];

//       // hero can't handle more than the most powerful attack
//       const isNotPossibleToBeatEnemies = nextAttackCost + nextHealthEnemy > 8;

//       // hero also can die if enemies can beat him in the next movements
//       const isHeroCanDie =
//         nextAttackEnemy >= heroHealth ||
//         level[nextEnemyIndex + 1]?.[1] >= heroHealth;

//       if (isHeroCanDie || isNotPossibleToBeatEnemies) {
//         break;
//       }

//       nextAttackCost += nextHealthEnemy;
//       nextEnemyIndex++;
//     }

//     return [nextAttackCost, nextEnemyIndex];
//   };

//   const lowTheCooldowns = () => {
//     if (metaData.crit.cooldown) metaData.crit.cooldown--;
//     if (metaData.spec.cooldown) metaData.spec.cooldown--;
//   };

//   const replaceAttackInCooldown = (enemyDamage, enemyHealth, enemyIndex) => {
//     while (true) {
//       if (!metaData.spec.cooldown) {
//         executeSpecialAttack(enemyIndex);
//         heroHealth -= enemyDamage;
//         enemyHealth -= metaData.spec.cost;
//       } else if (!metaData.crit.cooldown) {
//         executeCriticalAttack();
//         heroHealth -= enemyDamage;
//         enemyHealth -= metaData.crit.cost;
//       } else {
//         executeRegularAttack();
//         heroHealth -= enemyDamage;
//         enemyHealth -= metaData.reg.cost;
//       }

//       if (heroHealth <= 0) {
//         console.log("HERO IS DEAD");
//       }

//       if (enemyHealth <= 0) break;

//       lowTheCooldowns();
//     }
//   };

//   // iterate enemies one by one
//   while (true) {
//     if (enemyIndex == level.length) break;
//     lowTheCooldowns();

//     let [enemyHealth, enemyDamage] = level[enemyIndex];

//     // there is no attack
//     if (enemyHealth == 0) {
//       executeNoAttack();
//       enemyIndex++;
//       continue;
//     }

//     // check the cost of the attack for the hero
//     let [nextAttackCost, nextEnemyIndex] = getEnemiesNextAtackCost();

//     // regular attack
//     if (nextAttackCost == metaData.reg.cost) {
//       executeRegularAttack();
//       enemyIndex++;
//       continue;
//     }

//     // special attack
//     if (
//       nextAttackCost == metaData.spec.cost ||
//       (nextAttackCost > metaData.reg.cost &&
//         nextAttackCost < metaData.spec.cost)
//     ) {
//       if (metaData.spec.cooldown) {
//         // this attack is in cooldown, so another must be applied
//         replaceAttackInCooldown(enemyDamage, enemyHealth, enemyIndex);
//         enemyIndex++;
//         continue;
//       }

//       executeSpecialAttack(nextEnemyIndex);
//       enemyIndex++;
//       continue;
//     }

//     // critical attack
//     if (
//       nextAttackCost == metaData.crit.cost ||
//       (nextAttackCost > metaData.spec.cost &&
//         nextAttackCost < metaData.crit.cost)
//     ) {
//       if (metaData.crit.cooldown) {
//         // this attack is in cooldown, so another must be applied
//         replaceAttackInCooldown(enemyDamage, enemyHealth, enemyIndex);
//         enemyIndex++;
//         continue;
//       }

//       executeCriticalAttack();
//       enemyIndex++;
//       continue;
//     }
//   }

//   return result;
// }

// New approach
/**
 * @see https://www.codewars.com/kata/63b1c240a4ade100500f665e/train/javascript
 * @param {number} health
 * @param {Array<[number, number]>} level
 * @returns {string}
 */
export function fight(health, level) {
  const waves = getWaves(level);

  let result = "";
  let heroHealth = health;
  let position = 0;

  for (const wave of waves) {
    // Empty tiles before this wave
    result += "-".repeat(wave.start - position);

    const waveLevel = level.slice(wave.start, wave.end + 1);

    const solution = solveWave(heroHealth, waveLevel);

    if (!solution) {
      throw new Error("No solution found");
    }

    result += solution.actions;
    heroHealth = solution.health;

    position = wave.end + 1;
  }

  // Empty tiles after the final wave
  result += "-".repeat(level.length - position);

  return result;
}

/**
 * Split the level into waves.
 *
 * Enemies belong to the same wave when there are
 * at most 2 empty tiles between them.
 */
function getWaves(level) {
  const enemies = [];

  for (let i = 0; i < level.length; i++) {
    if (level[i][0] > 0) {
      enemies.push(i);
    }
  }

  if (enemies.length === 0) {
    return [];
  }

  const waves = [];

  let start = enemies[0];
  let previous = enemies[0];

  for (let i = 1; i < enemies.length; i++) {
    const current = enemies[i];

    // index difference:
    //
    // 1 -> adjacent
    // 2 -> 1 empty tile
    // 3 -> 2 empty tiles
    // 4 -> 3 empty tiles => new wave
    if (current - previous >= 4) {
      waves.push({
        start,
        end: previous,
      });

      start = current;
    }

    previous = current;
  }

  waves.push({
    start,
    end: previous,
  });

  return waves;
}

/**
 * Find the solution for one wave which leaves
 * the hero with the greatest amount of health.
 *
 * @param {number} initialHealth
 * @param {Array<[number, number]>} wave
 */
function solveWave(initialHealth, wave) {
  const initialState = {
    position: 0,
    health: initialHealth,

    // We mutate enemy health during the search.
    hp: wave.map(([health]) => health),

    // Number of non-C actions since last C.
    // 2 means C is available.
    sinceC: 2,

    // Number of non-A actions since last A.
    // 2 means A has no self-damage.
    sinceA: 2,

    actions: "",
  };

  const queue = [initialState];
  let queueIndex = 0;

  /**
   * key -> highest hero health seen for that state.
   *
   * If we reach exactly the same game state again
   * with less health, there is no reason to explore it.
   */
  const visited = new Map();

  let bestSolution = null;

  while (queueIndex < queue.length) {
    const state = queue[queueIndex++];

    // Wave completed
    if (state.position >= wave.length) {
      if (bestSolution === null || state.health > bestSolution.health) {
        bestSolution = {
          health: state.health,
          actions: state.actions,
        };
      }

      continue;
    }

    // Health can never increase.
    // Therefore this state cannot improve our best result.
    if (bestSolution !== null && state.health <= bestSolution.health) {
      continue;
    }

    const key = getStateKey(state);
    const previousBestHealth = visited.get(key);

    if (
      previousBestHealth !== undefined &&
      previousBestHealth >= state.health
    ) {
      continue;
    }

    visited.set(key, state.health);

    const enemyHealth = state.hp[state.position];

    /*
     * Empty tile
     *
     * This can be an original [0,0], or an enemy
     * that was already killed by a previous A chain.
     *
     * There is no advantage to attacking here,
     * so simply move.
     */
    if (enemyHealth === 0) {
      queue.push(moveThroughEmpty(state));
      continue;
    }

    /*
     * Try all useful actions.
     */

    // B is always available
    const regular = executeAttack(state, wave, "B");

    if (regular) {
      queue.push(regular);
    }

    // C needs two actions between uses
    if (state.sinceC >= 2) {
      const special = executeAttack(state, wave, "C");

      if (special) {
        queue.push(special);
      }
    }

    // A is always technically available.
    // Using it too early costs hero health.
    const critical = executeAttack(state, wave, "A");

    if (critical) {
      queue.push(critical);
    }

    /*
     * "-" while fighting.
     *
     * Usually bad, but keeping it makes the solver
     * fully safe: waiting can restore attack cooldowns.
     */
    const wait = executeWait(state, wave);

    if (wait) {
      queue.push(wait);
    }
  }

  return bestSolution;
}

/**
 * Execute B, C or A.
 */
function executeAttack(state, wave, action) {
  const next = cloneState(state);

  /*
   * A cooldown penalty.
   *
   * AA   -> lose 8 HP
   * A-A  -> lose 4 HP
   * A--A -> lose 0 HP
   */
  if (action === "A") {
    if (next.sinceA === 0) {
      next.health -= 8;
    } else if (next.sinceA === 1) {
      next.health -= 4;
    }

    // Hero can die from critical attack exhaustion.
    if (next.health <= 0) {
      return null;
    }
  }

  /*
   * Deal damage.
   */
  if (action === "B") {
    next.hp[next.position] = Math.max(0, next.hp[next.position] - 2);
  }

  if (action === "C") {
    next.hp[next.position] = Math.max(0, next.hp[next.position] - 4);
  }

  if (action === "A") {
    executeCriticalDamage(next);
  }

  next.actions += action;

  /*
   * If current enemy died, hero automatically advances
   * exactly one tile.
   *
   * Otherwise the enemy attacks.
   */
  if (next.hp[next.position] === 0) {
    next.position++;
  } else {
    const enemyAttack = wave[next.position][1];

    next.health -= enemyAttack;

    if (next.health <= 0) {
      return null;
    }
  }

  updateCooldowns(next, action);

  return next;
}

/**
 * Critical attack:
 *
 * enemy 1 -> 8
 * enemy 2 -> 4
 * enemy 3 -> 2
 * enemy 4 -> 1
 *
 * Chain stops when:
 * - four enemies were reached
 * - an empty/dead tile is encountered
 */
function executeCriticalDamage(state) {
  let damage = 8;

  for (let i = state.position; i < state.hp.length && damage >= 1; i++) {
    // Chain stops on an empty tile
    if (state.hp[i] === 0) {
      break;
    }

    state.hp[i] = Math.max(0, state.hp[i] - damage);

    damage /= 2;
  }
}

/**
 * Do nothing while facing an enemy.
 * Enemy gets a free hit.
 */
function executeWait(state, wave) {
  const next = cloneState(state);

  const enemyAttack = wave[next.position][1];

  next.health -= enemyAttack;

  if (next.health <= 0) {
    return null;
  }

  next.actions += "-";

  updateCooldowns(next, "-");

  return next;
}

/**
 * Move through an empty/dead tile.
 */
function moveThroughEmpty(state) {
  const next = cloneState(state);

  next.position++;
  next.actions += "-";

  updateCooldowns(next, "-");

  return next;
}

/**
 * Update attack cooldown counters.
 *
 * C:
 *
 * C B B C
 *   1 2
 *
 * A:
 *
 * AA    -> sinceA = 0 -> 8 damage
 * A-A   -> sinceA = 1 -> 4 damage
 * A--A  -> sinceA = 2 -> no damage
 */
function updateCooldowns(state, action) {
  if (action === "C") {
    state.sinceC = 0;
  } else {
    state.sinceC = Math.min(2, state.sinceC + 1);
  }

  if (action === "A") {
    state.sinceA = 0;
  } else {
    state.sinceA = Math.min(2, state.sinceA + 1);
  }
}

/**
 * State used by memoization.
 *
 * Health is intentionally excluded because visited
 * stores the maximum health reached for this state.
 */
function getStateKey(state) {
  return [state.position, state.hp.join(","), state.sinceC, state.sinceA].join(
    "|",
  );
}

function cloneState(state) {
  return {
    position: state.position,
    health: state.health,
    hp: [...state.hp],
    sinceC: state.sinceC,
    sinceA: state.sinceA,
    actions: state.actions,
  };
}
