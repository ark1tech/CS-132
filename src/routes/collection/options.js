export default {
    style: {
        "border-radius": "9999px",
    },
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
        alignement: 'center',
    },
    color : {
        pairing : {
            option: 2
        },
        scale: {
            Hot: "#e8b582",
            Top: "#bf7e3d",
            Controversial: "#a6611c"
        }
    }, 
    bars: {
        width: 50,
        maxWidth: 100,
        spacingFactor: -100,
    },
    theme : "g10"
  }