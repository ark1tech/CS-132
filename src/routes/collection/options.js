export default {
    title: 'Distribution of data',
    animations: true,
    axes: {
      left: {
        mapsTo: 'value',
        stacked: true
      },
      bottom: {
        mapsTo: 'key',
        scaleType: 'labels'
      }
    },
    height: '400px',
    legend: {
        alignment: 'center',
    },
    color : {
        pairing : {
            option: 2
        },
        scale: {
            2022: "#de6f57",
            2023: "#ff9b70",
            2024: "#e35619"
        }
    }, 
    bars: {
        width: 50,
        maxWidth: 100,
    },
    theme : "g10"
  }