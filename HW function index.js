const enterData = (text, type = "string") => {
    let data = prompt(text);

    return data;
}

const selectData = (text) => {
    let data = confirm(text);

    return data;
} 

const name = enterData("Введите имя");
const surname = enterData("Введите фамилию");
const experience = +enterData("Введите опыт работы в годах");
const isDifficultProjects = selectData("Ваши проекты были сложные?");
const isEnglish = selectData("Вы свободно говорите на английском?");
const isAlgorithms = selectData("Ты знаешь Алгоритмы?");
const isTeamManagement = selectData("Тебе нравится управлять командой?");
const fullName = `${name} ${surname}`;

let grade = null;
let salary = null;
let chance = null;

const setGrade = () => {
switch (true) {
  case experience > 2 && experience <= 5 && isEnglish:
    grade = "middle";
    break;
  case experience > 5 && isEnglish && isDifficultProjects:
    grade = "senior";
    break;
  case experience >= 10 && isEnglish && isDifficultProjects && isTeamManagement:
    grade = "principal";
    break;
  default:
    grade = "junior";
}
}

const setSalary = () => {
switch (grade) {
  case "middle":
    salary = "от 1500$ до 2700$";
    break;
  case "senior":
    salary = "от 3000$";
    break;
  case "principal":
    salary = "от 7000$";
    break;
  default:
    salary = "от 300$ до 1500$";
}
}

const setChance = () => {
switch (true) {
  case !isEnglish || !isAlgorithms:
    chance = "Шансов нет";
    break;
  case !isDifficultProjects:
    chance = "Шансов мало";
    break;
  default:
    chance = "Шансы есть";
}
}

setGrade();
setSalary();
setChance();
function displayData (fullName, experience, grade, salary, chance) {
alert(`
  Ваше Имя: ${fullName}
  Ваш опыт в годах: ${experience}
  Градация: ${grade}
  Примерная зп: ${salary}
  Шансы попасть на работу в корпорацию: ${chance}
`);
}
displayData (fullName, experience, grade, salary, chance);