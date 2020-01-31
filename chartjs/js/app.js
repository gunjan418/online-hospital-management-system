$(document).ready(function(){
  $.ajax({
    url: "http://localhost/VITHospitalManage/chartjs/data.php",
    method: "GET",
    success: function(data) {
      console.log(data);
      var city = [];
      var dia = [];
      var fev = [];
      var canc = [];
      var deng = [];
      var surg = [];
      var diarr = [];
      var pox = [];
      var tumo = [];
      var aller = [];
      var chest = [];

      for(var i in data) {
        city.push(data[i].city + " City");
        dia.push(data[i].patientnodia);
        fev.push(data[i].patientnofev);
        canc.push(data[i].patientnocanc);
        deng.push(data[i].patientnodeng);
        surg.push(data[i].patientnosurg);
        diarr.push(data[i].patientnodiarr);
        pox.push(data[i].patientnopox);
        tumo.push(data[i].patientnotumo);
        aller.push(data[i].patientnoaller);
        chest.push(data[i].patientnochest);
      }
//#####################################diabetes###########################//
var chartdatadia = {
  labels: city,
  datasets : [
    {
      label: 'Diabetes',
      backgroundColor: 'rgba(153, 11, 194, 0.75)',
      borderColor: 'rgba(200, 200, 200, 0.75)',
      hoverBackgroundColor: 'rgba(226, 124, 255, 1)',
      hoverBorderColor: 'rgba(200, 200, 200, 1)',
      data: dia
    }
  ]
};
var ctxdia = $("#mycanvasdia");
var barGraph = new Chart(ctxdia, {
  type: 'bar',
  data: chartdatadia
});

//########################################fever############################//
var chartdatafev = {
  labels: city,
  datasets : [
    {
      label: 'Common Fever',
      backgroundColor: 'rgba(153, 11, 194, 0.75)',
      borderColor: 'rgba(200, 200, 200, 0.75)',
      hoverBackgroundColor: 'rgba(226, 124, 255, 1)',
      hoverBorderColor: 'rgba(200, 200, 200, 1)',
      data: fev
    }
  ]
};
var ctxfev = $("#mycanvasfev");
var barGraph = new Chart(ctxfev, {
  type: 'bar',
  data: chartdatafev
});

//################################cancer##################################//
var chartdatacanc = {
  labels: city,
  datasets : [
    {
      label: 'Cancer',
      backgroundColor: 'rgba(153, 11, 194, 0.75)',
      borderColor: 'rgba(200, 200, 200, 0.75)',
      hoverBackgroundColor: 'rgba(226, 124, 255, 1)',
      hoverBorderColor: 'rgba(200, 200, 200, 1)',
      data: canc
    }
  ]
};
var ctxcanc = $("#mycanvascanc");
var barGraph = new Chart(ctxcanc, {
  type: 'bar',
  data: chartdatacanc
});


//###############################dengue###################################//
var chartdatadeng = {
  labels: city,
  datasets : [
    {
      label: 'Dengue',
      backgroundColor: 'rgba(153, 11, 194, 0.75)',
      borderColor: 'rgba(200, 200, 200, 0.75)',
      hoverBackgroundColor: 'rgba(226, 124, 255, 1)',
      hoverBorderColor: 'rgba(200, 200, 200, 1)',
      data: deng
    }
  ]
};
var ctxdeng = $("#mycanvasdeng");
var barGraph = new Chart(ctxdeng, {
  type: 'bar',
  data: chartdatadeng
});

//###############################surgery###################################//
var chartdatasurg = {
  labels: city,
  datasets : [
    {
      label: 'Surgery',
      backgroundColor: 'rgba(153, 11, 194, 0.75)',
      borderColor: 'rgba(200, 200, 200, 0.75)',
      hoverBackgroundColor: 'rgba(226, 124, 255, 1)',
      hoverBorderColor: 'rgba(200, 200, 200, 1)',
      data: surg
    }
  ]
};
var ctxsurg = $("#mycanvassurg");
var barGraph = new Chart(ctxsurg, {
  type: 'bar',
  data: chartdatasurg
});
//##################################diarrhoea##############################//
var chartdatadiarr = {
  labels: city,
  datasets : [
    {
      label: 'Diarrhoea',
      backgroundColor: 'rgba(153, 11, 194, 0.75)',
      borderColor: 'rgba(200, 200, 200, 0.75)',
      hoverBackgroundColor: 'rgba(226, 124, 255, 1)',
      hoverBorderColor: 'rgba(200, 200, 200, 1)',
      data: diarr
    }
  ]
};
var ctxdiarr = $("#mycanvasdiarr");
var barGraph = new Chart(ctxdiarr, {
  type: 'bar',
  data: chartdatadiarr
});
//##################################chicken pox############################//
      var chartdatapox = {
        labels: city,
        datasets : [
          {
            label: 'Chicken Pox',
            backgroundColor: 'rgba(153, 11, 194, 0.75)',
            borderColor: 'rgba(200, 200, 200, 0.75)',
            hoverBackgroundColor: 'rgba(226, 124, 255, 1)',
            hoverBorderColor: 'rgba(200, 200, 200, 1)',
            data: pox
          }
        ]
      };
      var ctxpox = $("#mycanvaspox");
      var barGraph = new Chart(ctxpox, {
        type: 'bar',
        data: chartdatapox
      });

//##################################tumorous##############################//
var chartdatatumo = {
  labels: city,
  datasets : [
    {
      label: 'Tumor',
      backgroundColor: 'rgba(153, 11, 194, 0.75)',
      borderColor: 'rgba(200, 200, 200, 0.75)',
      hoverBackgroundColor: 'rgba(226, 124, 255, 1)',
      hoverBorderColor: 'rgba(200, 200, 200, 1)',
      data: tumo
    }
  ]
};
var ctxtumo = $("#mycanvastumo");
var barGraph = new Chart(ctxtumo, {
  type: 'bar',
  data: chartdatatumo
});

//##################################allergies##############################//
var chartdataaller = {
  labels: city,
  datasets : [
    {
      label: 'Allergies',
      backgroundColor: 'rgba(153, 11, 194, 0.75)',
      borderColor: 'rgba(200, 200, 200, 0.75)',
      hoverBackgroundColor: 'rgba(226, 124, 255, 1)',
      hoverBorderColor: 'rgba(200, 200, 200, 1)',
      data: aller
    }
  ]
};
var ctxaller = $("#mycanvasaller");
var barGraph = new Chart(ctxaller, {
  type: 'bar',
  data: chartdataaller
});

//##################################chest pain##############################//
var chartdatachest = {
  labels: city,
  datasets : [
    {
      label: 'Chest Pain',
      backgroundColor: 'rgba(153, 11, 194, 0.75)',
      borderColor: 'rgba(200, 200, 200, 0.75)',
      hoverBackgroundColor: 'rgba(226, 124, 255, 1)',
      hoverBorderColor: 'rgba(200, 200, 200, 1)',
      data: chest
    }
  ]
};
var ctxchest = $("#mycanvaschest");
var barGraph = new Chart(ctxchest, {
  type: 'bar',
  data: chartdatachest
});
//#########################################################################//

    },
    error: function(data) {
      console.log(data);
    }
  });
});