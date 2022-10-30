function declareWinner(fighter1, fighter2, firstAttacker) {
  while (fighter1.health > 0 && fighter2.health > 0) {
    fighter2.health -= fighter1.damagePerAttack;
    fighter1.health -= fighter2.damagePerAttack;
  }

  if (fighter1.health <= 0 && fighter2.health <= 0) return firstAttacker;
  else if (fighter1.health <= 0) return fighter2.name;
  else return fighter1.name;
}
