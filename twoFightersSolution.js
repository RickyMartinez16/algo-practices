function declareWinner(fighter1, fighter2, firstAttacker) {
  while (fighter1.health > 0 && fighter2.health > 0) {      //while loop fighter1 health and fighter 2 health are greater than 0
    fighter2.health -= fighter1.damagePerAttack;    //fighter 2 health equals minus fighter 1 damage
    fighter1.health -= fighter2.damagePerAttack;    //fighter 1 health equals minuts fighter 2 damage
  }

  if (fighter1.health <= 0 && fighter2.health <= 0) return firstAttacker;   //if fighter 1 health and fighter 2 health less than 0 return first attaacker
  else if (fighter1.health <= 0) return fighter2.name;  //if fighter 1 health less than equal 0 return fighter 2
  else return fighter1.name;    //else return fighter 1
}
