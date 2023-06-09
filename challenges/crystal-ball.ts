/**
 * Crystal Ball Problem: Suppose you have a 100-story
 * building and two identical crystal balls.
 * You need to figure out the highest floor from which
 * you can drop a ball without it breaking.
 * The challenge is to find this with the minimum number
 * of throws. The key part of this problem is that if
 * a crystal ball breaks, you can't use it again. However,
 * if it doesn't break when dropped from a floor,
 * you can use it again.
 */

export const crystal_ball_challenge = (building: boolean[]) => {
  const jumpAmmount = Math.floor(Math.sqrt(building.length));
  let i = jumpAmmount;
  let dropCount = 0;

  // break the first ball by jumping sqrt at a time
  for (; i < building.length; i += jumpAmmount) {
    dropCount++;
    if (building[i]) {
      console.log(`fist ball broke at floor: ${i}`);
      break;
    }
  }

  // this will place the ball back one jumpAmmount
  i -= jumpAmmount;

  for (let j = 0; j < building.length && i < building.length; j++, i++) {
    dropCount++;
    if (building[i]) {
      console.log(`second ball broke at floor ${i}`);
      break;
    }
  }
  console.log(`total throws: ${dropCount}`);
};

const building = new Array(63).fill(false).concat(new Array(37).fill(true));
crystal_ball_challenge(building);
