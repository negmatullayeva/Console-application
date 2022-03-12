const personalNewsDB = {
  count: 0,
  news: {},
  actors: [],
  genres: [],
  privat: false,
  startProject: function () {
    personalNewsDB.count = +prompt("Siz qancha yangilik ko'rdingiz?");
    while (
      personalNewsDB.count == "" ||
      personalNewsDB.count == null ||
      isNaN(numberOfNewsDB.count)
    ) {
      numberOfNewsDB.count = +prompt("Siz qancha yangilik ko'rdingiz?");
    }
  },
  rememberNews: function () {
    for (let i = 0; i < 2; i++) {
      let a = prompt("Oxirgi ko'rgan yangiliklaringizdan biri?");
      let b = prompt("Unga qancha baxo bergan bo'lar edingiz?");
      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        console.log("Tayyor");
        personalNewsDB.news[a] = b;
      } else {
        console.log("Error");
        i--;
      }
    }
  },
  showPersonalLevel: function () {
    if (personalNewsDB.count < 10) {
      alert("Juda oz sonli yangiliklar o'qilibdi(");
    } else if (personalNewsDB.count >= 10 && personalNewsDB.count < 30) {
      alert("Siz klassik tomoshabinsiz!");
    } else {
      alert("Siz yangiliklar ishqibozisiz");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalNewsDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalNewsDB.privat) {
      personalNewsDB.privat = false;
    } else {
      personalNewsDB.privat = true;
    }
  },
  writeYourGenres: function () {
    /*for (let i = 1; i < 2; i++) {
      let genre = prompt(`Sizning sevimli janringiz: N/r ${i}`);
      if (genre == "" || genre == null) {
        console.log("Siz noto'g'ri ma'lumot kiritdingiz(");
        i--;
      } else {
        personalNewsDB.genres[i - 1] = genre;
      }
    }*/

    for (let i = 0; i < 2; i++) {
      let genre = prompt(
        `Sizning sevimli janringiz, vergul yordamida yozing `
      ).toLowerCase("Siz noto'g'ri ma'lumot kiritdingiz(");

      if (genre === "" || genre === null) {
        console.log("");
      } else {
        personalNewsDB.genres = genre.split(", ");
        personalNewsDB.genres.sort();
      }
    }

    personalNewsDB.genres.forEach((item, i) => {
      console.log(`Sizning sevimli janringiz: N/r ${i + 1} bu ${item}`);
    });
  },
};
