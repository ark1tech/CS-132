export default {
    title: 'Distribution of data per year',
    animations: true,
    axes: {
      left: {
        mapsTo: 'value',
      },
      bottom: {
        mapsTo: 'group',
        scaleType: 'labels'
      }
    },
    height: '400px',
    legend: {
        enabled: false,
        alignment: 'center',
    },
    color : {
        pairing : {
            option: 2
        },
        scale: {
            2022: "#ff9b70",
            2023: "#de6f57",
            2024: "#e35619"
        }
    }, 
    bars: {
        width: 50,
        maxWidth: 50,
    },
    theme : "g10"
  }