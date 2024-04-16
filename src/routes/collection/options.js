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
            Hot: "#ff9e7a",
            Top: "#e0815c",
            Controversial: "#db6537"
        }
    }, 
    bars: {
        width: 50,
        maxWidth: 100,
        spacingFactor: -100,
    },
    theme : "g10"
  }