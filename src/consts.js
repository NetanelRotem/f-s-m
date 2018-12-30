export const apiEndPoint = "https://geek-jokes.sameerkumar.website/api"

export const settings = {
  "initial": "start",
  "states": {
    "start": {
      "on": {
        "SEARCH": "joke",
        "ERROR": "error"
      }
    },

    "error": {
      "on": {
        "TRYAGAIN": "start"
      }
    },
    "joke": {
      "on": {
        "CONFIRM": "success",
        "CANCEL": "start"
      }
    },
    "success": {
      "on": {
        "TRYAGAIN": "start"
      }
    }

  }
}


export const oven = {
  "initial": "start",
  "states": {
    "start": {
      "on": {
        "TURNINGON": "heating"
      }
    },
    "heating": {
      "onEnter": "heat",
      "on": {
        "CANCEL": "start",
        "MAXTEMP": "idle"
      }
    },
    "idle": {
      "onEnter": "startIdel",
      "on": {
        "MINTEMP": "heating",
        "BAKED": "dinner",
        "CANCEL": "start"
      }
    },
    "dinner": {
      "onEnter": "restart",
      "on": {
        "BAKED": "start",
        "TURNINGON": "heating"
      }
    }
  }
}

export const ovenSchema = 'https://musing-rosalind-2ce8e7.netlify.com/?machine=%7B%22initial%22%3A%22start%22%2C%22states%22%3A%7B%22start%22%3A%7B%22on%22%3A%7B%22TURNINGON%22%3A%22heating%22%7D%7D%2C%22heating%22%3A%7B%22onEnter%22%3A%22heat%22%2C%22on%22%3A%7B%22CANCEL%22%3A%22start%22%2C%22MAXTEMP%22%3A%22idle%22%7D%7D%2C%22idle%22%3A%7B%22onEnter%22%3A%22startIdel%22%2C%22on%22%3A%7B%22MINTEMP%22%3A%22heating%22%2C%22BAKED%22%3A%22dinner%22%2C%22CANCEL%22%3A%22start%22%7D%7D%2C%22dinner%22%3A%7B%22onEnter%22%3A%22restart%22%2C%22on%22%3A%7B%22BAKED%22%3A%22start%22%2C%22TURNINGON%22%3A%22heating%22%7D%7D%7D%7D'
export const jokeSchema = 'https://musing-rosalind-2ce8e7.netlify.com/?machine=%7B%22initial%22%3A%22start%22%2C%22states%22%3A%7B%22start%22%3A%7B%22on%22%3A%7B%22SEARCH%22%3A%22joke%22%2C%22ERROR%22%3A%22error%22%7D%7D%2C%22error%22%3A%7B%22on%22%3A%7B%22TRYAGAIN%22%3A%22start%22%7D%7D%2C%22joke%22%3A%7B%22on%22%3A%7B%22CONFIRM%22%3A%22success%22%2C%22CANCEL%22%3A%22start%22%7D%7D%2C%22success%22%3A%7B%22on%22%3A%7B%22TRYAGAIN%22%3A%22start%22%7D%7D%7D%7D'