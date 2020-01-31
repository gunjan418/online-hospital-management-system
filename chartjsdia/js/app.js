$(document).ready(function(){
  $.ajax({
    url: "http://localhost/VITHospitalManage/chartjsdia/data.php",
    method: "GET",
    success: function(data) {
      console.log(data);
      var city = [];
      var dia = [];
      var fev = [];

      for(var i in data) {
        city.push(data[i].city + " City");
        dia.push(data[i].patientnodia);
        fev.push(data[i].patientnofev);
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
/*
//################################cancer##################################//
var chartdatadia = {
  labels: city,
  datasets : [
    {
      label: 'Diabetes Disease',
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


//###############################dengue###################################//
var chartdatadia = {
  labels: city,
  datasets : [
    {
      label: 'Diabetes Disease',
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

//###############################surgery###################################//
var chartdatadia = {
  labels: city,
  datasets : [
    {
      label: 'Diabetes Disease',
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
//##################################diarrhoea##############################//
var chartdatadia = {
  labels: city,
  datasets : [
    {
      label: 'Diabetes Disease',
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
//##################################chicken pox############################//
      var chartdatadia = {
        labels: city,
        datasets : [
          {
            label: 'Diabetes Disease',
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
//#########################################################################//
*/
    },
    error: function(data) {
      console.log(data);
    }
  });
});