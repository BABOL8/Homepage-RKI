"use strict";

/*!
 * gulp-hbs-boilerplate
 * A Handlebars and Gulp 4 boilerplate
 * Jon Welsh
 * git+https://github.com/jonwelsh/gulp-hbs-boilerplate.git
 */
var btnNav = document.querySelector(".menu-nav");
var navMenu = document.querySelector(".navigation-wrapper");
var iconShow = document.querySelector("#menuShow");
var iconHide = document.querySelector("#menuClose");

if (btnNav) {
  btnNav.onclick = function () {
    if (navMenu.classList.contains("d-none")) {
      iconShow.classList.add("d-none");
      iconHide.classList.remove("d-none");
      navMenu.classList.remove("d-none");
      navMenu.classList.add("d-block", "animate__animated", "animate__fadeIn");
    } else {
      navMenu.classList.remove(
        "d-block",
        "animate__animated",
        "animate__fadeIn"
      );
      navMenu.classList.add("d-none");
      iconShow.classList.remove("d-none");
      iconHide.classList.add("d-none");
    }
  };
}

if (document.querySelector(".banner-hero")) {
  var bannerHero = new Glide(document.querySelector(".banner-hero"), {
    type: "carousel",
    autoplay: 2000,
    hoverpause: true,
    perView: 1,
  });
  bannerHero.mount();
}

if (document.querySelector("#choiceSlider")) {
  var choiceSlider = new Glide(document.querySelector("#choiceSlider"), {
    type: "carousel",
    autoplay: false,
    hoverpause: true,
    perView: 3,
    perTouch: 2,
    breakpoints: {
      800: {
        perView: 3,
        perTouch: 2,
        after: 80,
      },
      460: {
        perView: 1,
        perTouch: 1,
        peek: {
          before: 0,
          after: 80,
        },
      },
    },
  });
  choiceSlider.mount();
}

if (document.querySelector("#potraitSlide")) {
  var _choiceSlider = new Glide(document.querySelector("#potraitSlide"), {
    type: "carousel",
    autoplay: 5000,
    hoverpause: true,
    perView: 5,
    perTouch: 3,
    breakpoints: {
      800: {
        perView: 3,
        perTouch: 2,
        after: 80,
      },
      460: {
        perView: 2,
        perTouch: 1,
        peek: {
          before: 0,
          after: 30,
        },
      },
    },
  });

  _choiceSlider.mount();
}

if (document.querySelector(".video-slider")) {
  var _choiceSlider2 = new Glide(document.querySelector(".video-slider"), {
    type: "carousel",
    perView: 3,
    perTouch: 1,
    peek: {
      before: 0,
      after: 50,
    },
    breakpoints: {
      460: {
        perView: 2,
        perTouch: 1,
        peek: {
          before: 0,
          after: 25,
        },
      },
    },
  });

  _choiceSlider2.mount();
} // Date List

if (document.querySelector(".list-date")) {
  var date = new Date();
  var thisdate = date.getDate();

  var _choiceSlider3 = new Glide(document.querySelector(".list-date"), {
    type: "carousel",
    perView: 7,
    perTouch: 1,
    startAt: thisdate - 1,
    focusAt: "center",
  });

  _choiceSlider3.mount();
}

if (document.querySelector(".list-widget")) {
  var _choiceSlider4 = new Glide(document.querySelector(".list-widget"), {
    type: "carousel",
    perView: 2,
    perTouch: 1,
  });

  _choiceSlider4.mount();
} // Slider potrait program on index-two.html

if (document.querySelector("#potraitProgram")) {
  var _choiceSlider5 = new Glide(document.querySelector("#potraitProgram"), {
    type: "carousel",
    autoplay: 5000,
    hoverpause: true,
    perView: 4,
    perTouch: 2,
    breakpoints: {
      460: {
        perView: 2,
        perTouch: 1,
        peek: {
          before: 0,
          after: 50,
        },
      },
      370: {
        perView: 2,
        perTouch: 1,
        peek: {
          before: 0,
          after: 20,
        },
      },
    },
  });

  _choiceSlider5.mount();
}

if (document.querySelector("#homeAlt2")) {
  var _choiceSlider5 = new Glide(document.querySelector("#homeAlt2"), {
    type: "carousel",
    autoplay: 5000,
    hoverpause: true,
    perView: 2,
    perTouch: 1,
    peek: {
      before: 0,
      after: 50,
    },
    breakpoints: {
      460: {
        perView: 1,
        perTouch: 1,
        peek: {
          before: 0,
          after: 100,
        },
      },
    },
  });

  _choiceSlider5.mount();
}

if (document.querySelector("#zakatSlider")) {
  var _choiceSlider6 = new Glide(document.querySelector("#zakatSlider"), {
    type: "carousel",
    autoplay: 5000,
    hoverpause: true,
    perView: 1,
    perTouch: 1,
  });

  _choiceSlider6.mount();
}

if (document.querySelector(".recommend-slider")) {
  var _choiceSlider7 = new Glide(document.querySelector(".recommend-slider"), {
    type: "carousel",
    startAt: 1,
    perView: 2,
    perTouch: 1,
    peek: {
      before: 0,
      after: 60,
    },
    breakpoints: {
      460: {
        perView: 1,
        perTouch: 1,
        peek: {
          before: 0,
          after: 100,
        },
      },
    },
  });

  _choiceSlider7.mount();
}
if (document.querySelector(".recommend-slider-two")) {
  var _choiceSlider7 = new Glide(
    document.querySelector(".recommend-slider-two"),
    {
      type: "carousel",
      startAt: 1,
      perView: 2,
      perTouch: 1,
      peek: {
        before: 0,
        after: 60,
      },
      breakpoints: {
        460: {
          perView: 1,
          perTouch: 1,
          peek: {
            before: 0,
            after: 100,
          },
        },
      },
    }
  );

  _choiceSlider7.mount();
}
if (document.querySelector(".recommend-slider-three")) {
  var _choiceSlider7 = new Glide(
    document.querySelector(".recommend-slider-three"),
    {
      type: "carousel",
      startAt: 1,
      perView: 2,
      perTouch: 1,
      peek: {
        before: 0,
        after: 60,
      },
      breakpoints: {
        460: {
          perView: 1,
          perTouch: 1,
          peek: {
            before: 0,
            after: 100,
          },
        },
      },
    }
  );

  _choiceSlider7.mount();
}
if (document.querySelector(".recommend-slider-four")) {
  var _choiceSlider7 = new Glide(
    document.querySelector(".recommend-slider-four"),
    {
      type: "carousel",
      startAt: 1,
      perView: 2,
      perTouch: 1,
      peek: {
        before: 0,
        after: 60,
      },
      breakpoints: {
        460: {
          perView: 1,
          perTouch: 1,
          peek: {
            before: 0,
            after: 100,
          },
        },
      },
    }
  );

  _choiceSlider7.mount();
}

if (document.querySelector(".recommend-slider-ended")) {
  var _choiceSlider7 = new Glide(
    document.querySelector(".recommend-slider-ended"),
    {
      perView: 2,
      perTouch: 1,
      peek: {
        before: 0,
        after: 60,
      },
      breakpoints: {
        460: {
          perView: 1,
          perTouch: 1,
          peek: {
            before: 0,
            after: 40,
          },
        },
      },
    }
  );

  _choiceSlider7.mount();
}
if (document.querySelector(".recommend-slider-half")) {
  var imageAbs = document.querySelector(".img-slider-absolute");
  var _choiceSlider7 = new Glide(
    document.querySelector(".recommend-slider-half"),
    {
      type: "slider",
      perView: 2,
      perTouch: 1,
      focusAt: "center",
      peek: {
        before: 0,
        after: 60,
      },
      breakpoints: {
        460: {
          perView: 2,
          perTouch: 1,
          focusAt: 1,
          gap: 5,
          peek: {
            before: 0,
            after: 0,
          },
        },
      },
    }
  );
  _choiceSlider7.on("run", function () {
    if (imageAbs && imageAbs.classList.contains("show")) {
      imageAbs.classList.remove("show");
      imageAbs.classList.add("hide");
    }
  });

  _choiceSlider7.on("run.start", function () {
    if (imageAbs && imageAbs.classList.contains("hide")) {
      imageAbs.classList.remove("hide");
      imageAbs.classList.add("show");
    }
  });

  _choiceSlider7.mount();
}

if (document.querySelector("#donasiRutin")) {
  var _choiceSlider8 = new Glide(document.querySelector("#donasiRutin"), {
    type: "carousel",
    autoplay: 3500,
    hoverpause: true,
    perView: 2,
    perTouch: 2,
    peek: {
      before: 0,
      after: 150,
    },
    breakpoints: {
      460: {
        perView: 1,
        perTouch: 1,
        peek: {
          before: 0,
          after: 150,
        },
      },
    },
  });

  _choiceSlider8.mount();
}

if (document.querySelector("#blogList")) {
  var _choiceSlider9 = new Glide(document.querySelector("#blogList"), {
    type: "carousel",
    autoplay: 5000,
    hoverpause: true,
    perView: 1,
    perTouch: 2,
    peek: {
      before: 0,
      after: 120,
    },
  });

  _choiceSlider9.mount();
}

if (document.querySelector("#landingSlide")) {
  var _choiceSlider10 = new Glide(document.querySelector("#landingSlide"), {
    type: "carousel",
    autoplay: 4000,
    hoverpause: true,
    perView: 1,
    perTouch: 1,
  });

  _choiceSlider10.mount();
}

var fullImage = document.querySelector(".image-full-screen");
var header = document.querySelector(".header-fixed");
var headerDownload = document.querySelector(".sticky-download");
var minPosition = 649;

if (fullImage && window.matchMedia("(max-width: 640px)").matches) {
  var checkPosition = function checkPosition() {
    var windowY = window.scrollY;

    if (windowY <= minPosition) {
      header.classList.add("header-static");
      headerDownload.classList.add("header-static");
    } else {
      header.classList.remove("header-static");
      headerDownload.classList.remove("header-static");
    }
  };

  fullImage.classList.remove("d-none");
  window.addEventListener("scroll", checkPosition);
}

var headerDonate = document.querySelector(".donate-detail-header");

if (window.matchMedia("(max-width: 640px)").matches) {
  if (headerDonate && !fullImage) {
    headerDonate.classList.add("mt-65");
  }
}

var donateSticky = document.querySelector(".donate-sticky");

if (donateSticky) {
  var hideSticky = function hideSticky() {
    var windowY = window.scrollY;

    if (windowY <= minPosition) {
      donateSticky.classList.add("d-none");
    } else {
      donateSticky.classList.remove("d-none");
    }
  };

  window.addEventListener("scroll", hideSticky);
}

var btnCloseApp = document.querySelector("#closeApp");
var divDownload = document.querySelector(".sticky-download");

if (divDownload) {
  btnCloseApp.onclick = function () {
    divDownload.classList.add("d-none");
  };
}

var btnStory = document.querySelector("#btnStory");
var btnActivity = document.querySelector("#btnActivity");
var btnUser = document.querySelector("#btnUser");
var divStory = document.querySelector("#donateStory");
var divActivity = document.querySelector("#donateActivity");
var divUser = document.querySelector("#donateUser");

if (divStory || divActivity || divUser) {
  btnStory.onclick = function () {
    divStory.classList.remove("d-none");
    divActivity.classList.add("d-none");
    divUser.classList.add("d-none");
    btnStory.classList.add("active");
    btnActivity.classList.remove("active");
    btnUser.classList.remove("active");
  };

  btnActivity.onclick = function () {
    divStory.classList.add("d-none");
    divActivity.classList.remove("d-none");
    divUser.classList.add("d-none");
    btnStory.classList.remove("active");
    btnActivity.classList.add("active");
    btnUser.classList.remove("active");
  };

  btnUser.onclick = function () {
    divStory.classList.add("d-none");
    divActivity.classList.add("d-none");
    divUser.classList.remove("d-none");
    btnStory.classList.remove("active");
    btnActivity.classList.remove("active");
    btnUser.classList.add("active");
  };
}

var loadingPayment = document.querySelector("#loadingPayment");
console.log("loadingPayment", loadingPayment);

if (loadingPayment) {
  setTimeout(function () {
    loadingPayment.classList.add("d-none");
  }, 1800);
} // Tabs Hitung Zakat

var zHasil = document.querySelector("#zHasil");
var zTabung = document.querySelector("#zTabung");
var zDagang = document.querySelector("#zDagang");
var zEmas = document.querySelector("#zEmas");
var fHasil = document.querySelector("#fHasil");
var fTabung = document.querySelector("#fTabung");
var fDagang = document.querySelector("#fDagang");
var fEmas = document.querySelector("#fEmas");

if (zHasil || zTabung || zDagang || zEmas) {
  zHasil.onclick = function () {
    zHasil.classList.add("active");
    zDagang.classList.remove("active");
    zTabung.classList.remove("active");
    zEmas.classList.remove("active");
    fHasil.classList.remove("d-none");
    fDagang.classList.add("d-none");
    fTabung.classList.add("d-none");
    fEmas.classList.add("d-none");
  };

  zTabung.onclick = function () {
    zTabung.classList.add("active");
    zDagang.classList.remove("active");
    zHasil.classList.remove("active");
    zEmas.classList.remove("active");
    fTabung.classList.remove("d-none");
    fDagang.classList.add("d-none");
    fHasil.classList.add("d-none");
    fEmas.classList.add("d-none");
  };

  zDagang.onclick = function () {
    zHasil.classList.remove("active");
    zDagang.classList.add("active");
    zTabung.classList.remove("active");
    zEmas.classList.remove("active");
    fHasil.classList.add("d-none");
    fDagang.classList.remove("d-none");
    fTabung.classList.add("d-none");
    fEmas.classList.add("d-none");
  };

  zEmas.onclick = function () {
    zHasil.classList.remove("active");
    zDagang.classList.remove("active");
    zTabung.classList.remove("active");
    zEmas.classList.add("active");
    fHasil.classList.add("d-none");
    fDagang.classList.add("d-none");
    fTabung.classList.add("d-none");
    fEmas.classList.remove("d-none");
  };
} // Tabs Infaq

var btnInfaqOnline = document.querySelector("#iOnline");
var btnInfaqQr = document.querySelector("#iQr");
var btnInfaqDonatur = document.querySelector("#iDonatur");
var divInfaqOnline = document.querySelector("#iOnlineTab");
var divInfaqQr = document.querySelector("#iQrTab");
var divInfaqDonatur = document.querySelector("#iDonaturTab");

if (btnInfaqOnline || btnInfaqQr || btnInfaqDonatur) {
  btnInfaqOnline.onclick = function () {
    divInfaqOnline.classList.remove("d-none");
    divInfaqQr.classList.add("d-none");
    divInfaqDonatur.classList.add("d-none");
    btnInfaqOnline.classList.add("active");
    btnInfaqQr.classList.remove("active");
    btnInfaqDonatur.classList.remove("active");
  };

  btnInfaqQr.onclick = function () {
    divInfaqOnline.classList.add("d-none");
    divInfaqQr.classList.remove("d-none");
    divInfaqDonatur.classList.add("d-none");
    btnInfaqOnline.classList.remove("active");
    btnInfaqQr.classList.add("active");
    btnInfaqDonatur.classList.remove("active");
  };

  btnInfaqDonatur.onclick = function () {
    divInfaqOnline.classList.add("d-none");
    divInfaqQr.classList.add("d-none");
    divInfaqDonatur.classList.remove("d-none");
    btnInfaqOnline.classList.remove("active");
    btnInfaqQr.classList.remove("active");
    btnInfaqDonatur.classList.add("active");
  };
} // Tabs Event

var btnEventDeskripsi = document.querySelector("#btnEventDeskripsi");
var btnEventCampaign = document.querySelector("#btnEventCampaign");
var btnEventPeserta = document.querySelector("#btnEventPeserta");
var divEventDeskripsi = document.querySelector("#divEventDeskripsi");
var divEventCampaign = document.querySelector("#divEventCampaign");
var divEventPeserta = document.querySelector("#divEventPeserta");

if (btnEventDeskripsi || btnEventCampaign || btnEventPeserta) {
  btnEventDeskripsi.onclick = function () {
    divEventDeskripsi.classList.remove("d-none");
    divEventCampaign.classList.add("d-none");
    divEventPeserta.classList.add("d-none");
    btnEventDeskripsi.classList.add("active");
    btnEventCampaign.classList.remove("active");
    btnEventPeserta.classList.remove("active");
  };

  btnEventCampaign.onclick = function () {
    divEventCampaign.classList.remove("d-none");
    divEventDeskripsi.classList.add("d-none");
    divEventPeserta.classList.add("d-none");
    btnEventDeskripsi.classList.remove("active");
    btnEventCampaign.classList.add("active");
    btnEventPeserta.classList.remove("active");
  };

  btnEventPeserta.onclick = function () {
    divEventCampaign.classList.add("d-none");
    divEventDeskripsi.classList.add("d-none");
    divEventPeserta.classList.remove("d-none");
    btnEventDeskripsi.classList.remove("active");
    btnEventCampaign.classList.remove("active");
    btnEventPeserta.classList.add("active");
  };
} // Tabs Dsahboard

var btnOne = document.querySelector("#btnOne");
var btnTwo = document.querySelector("#btnTwo");
var tabOne = document.querySelector("#tabOne");
var tabTwo = document.querySelector("#tabTwo");

if (btnOne || btnTwo) {
  btnOne.onclick = function () {
    tabOne.classList.remove("d-none");
    tabTwo.classList.add("d-none");
    btnOne.classList.add("active");
    btnTwo.classList.remove("active");
  };

  btnTwo.onclick = function () {
    tabTwo.classList.remove("d-none");
    tabOne.classList.add("d-none");
    btnOne.classList.remove("active");
    btnTwo.classList.add("active");
  };
} // Close banner full page on detail program

var btnBanner = document.querySelector("#closeBanner");
var imgBanner = document.querySelector(".image-full-screen");

if (imgBanner) {
  btnBanner.onclick = function () {
    imgBanner.classList.add("d-none");
  };
} // Collapse Intruksi Pembayaran

var btnCollapse = document.querySelector("#collapseIntr");
var bodyCollapse = document.querySelector("#collapseIntrBody");

if (bodyCollapse) {
  btnCollapse.onclick = function () {
    if (bodyCollapse.classList.contains("d-none")) {
      bodyCollapse.classList.remove("d-none");
    } else {
      bodyCollapse.classList.add("d-none");
    }
  };
} // Tabs Tema

var btnTProgram = document.querySelector("#btnTemaProgram");
var btnTReport = document.querySelector("#btnTemaReport");
var tProgram = document.querySelector("#temaProgram");
var tReport = document.querySelector("#temaReport");

if (btnTProgram || btnTReport) {
  btnTProgram.onclick = function () {
    tProgram.classList.remove("d-none");
    tReport.classList.add("d-none");
    btnTProgram.classList.add("active");
    btnTReport.classList.remove("active");
  };

  btnTReport.onclick = function () {
    tProgram.classList.add("d-none");
    tReport.classList.remove("d-none");
    btnTProgram.classList.remove("active");
    btnTReport.classList.add("active");
  };
}

var copyBtn = document.querySelector(".copyBtn");
var copyText = document.querySelector("#copyInput");
var toastLiveExample = document.getElementById("copyToast");
var copyBtn2 = document.querySelector(".copyBtn2");
var copyText2 = document.querySelector("#copyInput2");

copyBtn.onclick = function () {
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  /* For mobile devices */

  navigator.clipboard.writeText(copyText.value);
  var toast = new bootstrap.Toast(toastLiveExample);
  toast.show();
};

copyBtn2.onclick = function () {
  copyText2.select();
  copyText2.setSelectionRange(0, 99999);
  /* For mobile devices */

  navigator.clipboard.writeText(copyText2.value);
  var toast = new bootstrap.Toast(toastLiveExample);
  toast.show();
};

var imagePreview = document.querySelector("#imagePreview");
var imageUpload = document.querySelector("#imageUpload");

if (imagePreview || imageUpload) {
  var readURL = function readURL(input) {
    console.log("the", input);

    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        imagePreview.attr("src", e.target.result);
      };

      reader.readAsDataURL(input.files[0]);
    }
  };

  imageUpload.change(function () {
    readURL(this);
  });
} // CounterDate

var dateTime = document.querySelector("#dateTime");
var countDownDate = new Date(dateTime.value).getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  function makeMeTwoDigits(n) {
    return (n < 10 ? "0" : "") + n;
  }

  document.getElementById("timeCounter").innerHTML =
    makeMeTwoDigits(hours) +
    ":" +
    makeMeTwoDigits(minutes) +
    ":" +
    makeMeTwoDigits(seconds);

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timeCounter").innerHTML = "EXPIRED";
  }
}, 1000);
$(document).ready(function () {
  $("#dataTable").DataTable({
    scrollX: true,
    searching: true,
    info: false,
    lengthChange: false,
    bAutoWidth: false,
    language: {
      search: "",
      searchPlaceholder: "Cari berdasarkan nama",
      paginate: {
        previous: "<i class='fas fa-chevron-left'></i>",
        next: "<i class='fas fa-chevron-right'></i>",
      },
      emptyTable: "Data belum ada!",
      zeroRecords: "Data tidak ditemukan!",
    },
    columnDefs: [
      {
        searchable: false,
        orderable: false,
        targets: 0,
      },
    ],
    order: [[1, "asc"]],
  });
  $("#dashboardTable").DataTable({
    language: {
      search: "Cari:",
      searchPlaceholder: "Masukan Pencarian",
      paginate: {
        previous: "<i class='fas fa-chevron-left'></i>",
        next: "<i class='fas fa-chevron-right'></i>",
      },
      emptyTable: "Data belum ada!",
      zeroRecords: "Data tidak ditemukan!",
    },
  });
  $("#photo").change(function () {
    var file = this.files[0];

    if (file) {
      var reader = new FileReader();

      reader.onload = function (event) {
        $("#imgUpload").removeClass("d-none");
        $(".text-upload").addClass("d-none");
        $("#imgUpload").attr("src", event.target.result);
      };

      reader.readAsDataURL(file);
    }
  });

  window.onload = function () {
    var options = {
      animationEnabled: true,
      title: {
        text: "GDP Growth Rate - 2016",
      },
      axisY: {
        title: "Growth Rate (in %)",
        suffix: "%",
      },
      axisX: {
        title: "Countries",
      },
      data: [
        {
          type: "column",
          yValueFormatString: "#,##0.0#" % "",
          dataPoints: [
            {
              label: "Iraq",
              y: 10.09,
            },
            {
              label: "Turks & Caicos Islands",
              y: 9.4,
            },
            {
              label: "Nauru",
              y: 8.5,
            },
            {
              label: "Ethiopia",
              y: 7.96,
            },
            {
              label: "Uzbekistan",
              y: 7.8,
            },
            {
              label: "Nepal",
              y: 7.56,
            },
            {
              label: "Iceland",
              y: 7.2,
            },
            {
              label: "India",
              y: 7.1,
            },
          ],
        },
      ],
    };
    $("#chartContainer").CanvasJSChart(options);
  };

  var videoSrc = $("#lpVideo").attr("src");
  $("#modalVideo").on("show.bs.modal", function () {
    // on opening the modal
    console.log("buka");
    $("#lpVideo").attr("src", videoSrc + "?autoplay=1");
  });
  $("#modalVideo").on("hidden.bs.modal", function (e) {
    // on closing the modal
    $("#lpVideo").attr("src", null);
    console.log("tutup");
  });
});

// Scripts v.2023.01
