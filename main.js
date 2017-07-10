class blog {
  constructor (text) {
    this.text = text;
    this.renderTo = this.renderTo.bind(this);
    this.readData = this.readData.bind(this);
    this.readData(this.renderTo);
  }

  readData (callback) {
    this.text.forEach(function (s) {
      callback(s);
    });
  }

  renderTo(data) {
    const parent = this;
    const articleArr = this.text;
    console.log(articleArr);
    let createH2 = document.createElement("h2");
    let createP = document.createElement("p");
    createH2.textContent = data.title;
    createP.textContent = data.paragraph;
    document.getElementById("articles").appendChild(createH2);
    document.getElementById("articles").appendChild(createP);
    createH2.addEventListener('click', function (e) {
    var currentString = this;
    articleArr.forEach(function (s) {
      console.log(articleArr);
      let valueFound = articleArr.map(function(x) {
        return x.title
      }).indexOf(currentString.textContent);

      if (articleArr[valueFound].title === currentString.textContent) {
        document.getElementById("articles").innerHTML = "";
        document.getElementById("main-container").style.display = "block";
        document.getElementById("title").innerHTML = articleArr[valueFound].title
        document.getElementById("bg-img").style.backgroundImage = articleArr[valueFound].img.bgimg;
      //   articleArr[valueFound].posts.keys(a).forEach(function (key){
      //   console.log(a[key]);
      // });
      for (var i = 0; i < title.length; i++) {
        let currentPost = "post" + (i + 1);
        console.log(currentPost);
        title[i].textContent = articleArr[valueFound].posts[currentPost].title;
        subheading[i].textContent = articleArr[valueFound].posts[currentPost].subheading;
        aboutTitle[i].textContent = articleArr[valueFound].posts[currentPost].paragraph;
        subheadingAbout[i].textContent = articleArr[valueFound].posts[currentPost].paragraphSubheading;
        imgHeading[i].src = articleArr[valueFound].posts[currentPost].image;
      }
    }
    });
  });
  document.getElementById("button").addEventListener('click', function () {
    console.log('clicked');
    document.getElementById("articles").innerHTML = "";
    document.getElementById("main-container").style.display = "none";
    parent.readData(parent.renderTo)
  })
  }
}

new blog(json);
