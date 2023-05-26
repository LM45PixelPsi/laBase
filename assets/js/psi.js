// const psi = 1.3247;

// console.log(psi ** 4);

const psi = "1.3247";
document.documentElement.style.setProperty("--psi", psi);

const psi2 = Math.pow(psi, 2);
const psi2p = 100 / psi2 + "%";
document.documentElement.style.setProperty("--psi2p", psi2p);

// ----------------------------

const psi0 = Math.pow(psi, 0);
const p0 = 100 / psi0 + "%";

const psi1 = Math.pow(psi, 1);
const p1 = 100 / psi1 + "%";

const p2 = 100 / psi2 + "%";

const psi3 = Math.pow(psi, 3);
const p3 = 100 / psi3 + "%";

const psi4 = Math.pow(psi, 4);
const p4 = 100 / psi4 + "%";

const psi5 = Math.pow(psi, 5);
const p5 = 100 / psi5 + "%";

console.log(p0, p1, p2, p3, p4, p5);
