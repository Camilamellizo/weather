<template>
  <div class="bg-fondo bg-center bg-no-repeat px-2 lg:px-8 ">

    <div class="pt-4">
      <div class="flex justify-between">
        <div>
          <button type="button" class=" bg-gray py-2 px-4">
            Search for places
          </button>
        </div>

        <div class="bg-gray w-10 h-10 rounded-full grid content-center justify-items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
              style="fill: rgba(255,255,255);transform: ;msFilter:;">
              <circle cx="12" cy="12" r="4"></circle>
              <path
                d="M13 4.069V2h-2v2.069A8.01 8.01 0 0 0 4.069 11H2v2h2.069A8.008 8.008 0 0 0 11 19.931V22h2v-2.069A8.007 8.007 0 0 0 19.931 13H22v-2h-2.069A8.008 8.008 0 0 0 13 4.069zM12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z">
              </path>
            </svg>
          </span>
        </div>
      </div>
    </div>
    <!-- weather default -->
   
    <div v-if="weather" class="grid  justify-items-center text-center">
      <!-- imagen -->
      <div>
        <img :src="imgUrl" :alt="weather.name" class="w-24 h-24 rounded">
      </div>
      <!-- temperatura -->
      <div class="flex">
        <h2 class="text-7xl">{{ weather.main.temp }}</h2>
        <h3 class="text-3xl text-gray flex items-center ml-2 ">°C</h3>
      </div>

      <!-- descripcion -->
      <div class="bg-red-900">
        <h2>{{weather.weather.description}}</h2>
      </div>

      <!-- fecha -->
    <div>
      <h2></h2>
    </div>

      <!-- lugar -->
      <div class="flex space-x-2">
        <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
        </span>
        <p>{{ weather.name }},{{ weather.sys.country }}</p>
      </div>
    </div>
   
    <div class="mt-2">
      <!-- x -->
      <div class="flex justify-end my-2">
        <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </span>
      </div>

      <!-- search + button -->
      <div class="flex justify-between gap-1 mt-4">
        <label class="relative block">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg class="h-5 w-5 fill-gray" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30"
              viewBox="0 0 30 30">
              <path
                d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
              </path>
            </svg>
          </span>
          <input class=" bg-transparent placeholder:font-italitc border border-gray  py-2 pl-10 required"
            placeholder="Search location" type="text" />
        </label>
        <div>
          <button type="button" class=" bg-blue-buttom py-2 px-2">
            Search
          </button>
        </div>
      </div>

    </div>


    <div class="space-y-12">
      <div>
        <button class="hover:border hover:border-gray py-2 px-4 w-full flex justify-between">
          <span>London</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray"
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      <div>
        <button class="hover:border hover:border-gray  py-2 px-4 w-full rounded flex justify-between">
          <span>Barcelona</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray"
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      <div>
        <button class="hover:border hover:border-gray  py-2 px-4 w-full rounded flex justify-between">
          <span>Long Beach</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray"
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>

    </div>


</template>

<script>


export default {
  name: "Sidebar",

  data() {
    return {     
      location: "Barcelona",
      weather: null,
      error: "",
      key: "0e580afee13da9ed1a14afb86d1d8bf8",  
    }
  },
  computed: {
    imgUrl: function () {
      return `http://openweathermap.org/img/wn/${this.weather.weather[0].icon}@2x.png`
    },
  
  },

  mounted() {
    this.getWeather()
  },

  methods: {
    getWeather() {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${this.key}&units=metric`)
        //api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=0e580afee13da9ed1a14afb86d1d8bf8
        .then((res) => {
          if (!res.ok) throw new Error("Tenemos problemas cargando tus Datos")
          return res.json();
        })
        .then((data) => (this.weather = data))
        .catch((e) => (this.error = e))
    },

    date() {
      var d = new Date();
      var dia = new Array(7);
      dia[0] = "Domingo";
      dia[1] = "Lunes";
      dia[2] = "Martes";
      dia[3] = "Miercoles";
      dia[4] = "Jueves";
      dia[5] = "Viernes";
      dia[6] = "Sabado";
      document.write("Hoy es: " + dia[d.getDay()]);
    }
   

    },

};
</script>

<style>

</style>
