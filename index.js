let heroName = "DiÓculos";
let heroXP = "9500";

if (heroXP < 1000) {
    heroLevel = "Ferro";
 } else if (heroXP >= 1000 && heroXP <= 2000) {
    heroLevel = "Bronze";
 } else if (heroXP >= 2001 && heroXP <= 5000) {
    heroLevel = "Prata";
 } else if (heroXP >= 5001 && heroXP <= 7000) {
    heroLevel = "Ouro";
 } else if (heroXP >= 7001 && heroXP <= 8000) {
    heroLevel = "Platina";
 } else if (heroXP >= 8001 && heroXP <= 9000) {
    heroLevel = "Ascendente";
 } else if (heroXP >= 9001 && heroXP <= 10000) {
    heroLevel = "Immortal";
 } else if (heroXP >= 10001) {
    heroLevel = "Radiante";
 }

 console.log ("O Herói de nome " + heroName + " está no nível de " + heroLevel)