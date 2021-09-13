<template>
<div id="app" class="flex container h-screen w-full   ">
  <!----side-nav----->
    <div class="lg:w-1/5 border-r border-gray-300 px-2 lg:px-6 py-2 flex flex-col justify-between ">
            <div>
                    <button class="h-12 w-12 hover:bg-blue-100 text-3xl  rounded-full text-blue focus:outline-none">
                      <i class="fab fa-twitter text-blue-500"></i>
                    </button>
              <div>
                  <button v-for="tab in tabs" :key="tab" @click="id =tab.id"  :class="`focus:outline-none  hover:bg-indigo-200 hover:text-blue-500 flex items-center py-2 px-4 rounded-full mr-auto mb-3 mt-4 ${id== tab.id ? 'text-blue-500':''}`">
                    <i :class="`${tab.icon } text-2xl mr-4 text-left`"></i>
                  <p class="text-lg font-semibold text-left hidden lg:block "> {{tab.title}} </p>
                  </button>
              </div>
            <button class="text-white font-bold bg-blue-500 rounded-full font-semibold focus:outline-none w-12 h-12 lg-auto lg:w-full p-3 hover:bg-blue-400">
               <p class="hidden lg:block"> Tweet </p>
               <i class="fas fa-plus lg:hidden"></i>
                </button>
          </div>
          <div class="lg:w-full relative ">
            <button @click="dropdown = true " class="flex items-center w-full hover:bg-blue-100  rounded-full p-2 focus:outline-none">
              <img src="profile.jpg " class="w-10 h-10 rounded-full"/>
              <div class="hidden lg:block ml-2">
              <p class="text-sm font-bold leadind-tight">Adedire Solomon</p>
              <p class="text-sm leadind-tight">@enigmabrother</p>
              </div>
              <i class="hidden lg:block fas fa-angle-down ml-auto text-lg"></i>
            </button>
          <div v-if="dropdown === true" class="absolute bottom-0 left-0 w-64 rounded-lg shadow-md border-lightest bg-white mb-16 ">
             <button @click="dropdown = false " class="p-3 flex items-center w-full hover:bg-gray-200 p-2 focus:outline-none">
              <img src="profile.jpg " class="w-10 h-10 rounded-full"/>
              <div class="ml-4">
              <p class="text-sm font-bold leadind-tight">Adedire Solomon</p>
              <p class="text-sm leadind-tight">@enigmabrother</p>
              </div>
              <i class="fas  fa-check ml-auto text-blue-500"></i>
            </button>
            <button @click="dropdown = false " class="w-full text-left hover:bg-gray-200 border-t border-lighter p-3 text-sm focus:outline-none">
             Add an existing account 
            </button>
            <button @click="dropdown = false " class="w-full text-left hover:bg-gray-200 border-t border-lighter p-3 text-sm focus:outline-none">
             Log out @enigmabrother 
            </button>
          </div>
        </div>
    </div>

    <!----tweet section------>
    <div class="w-1/2 h-full overflow-y-scroll  ">
    <div class="px-5- py-3 pl-6 pr-6 border-b border-lighter flex items-center justify-between ">
      <h1 class="text-xl font-bold ">Home</h1>
      <i class="far fa-star text xl text-blue-500 "></i>
   </div>
     <div class="px-5 py-3 border-b-8 border-gray-100 flex">
       <div>
         <img src="profile.jpg" class="w-12 h12 rounded-full"/>
       </div>
       <form v-on:submit.prevent ="addNewTweet" class="w-full px-4 relative focus-outline-none">
         <textarea v-model="tweet.content" placeholder=" Whats up?" class=" mt-3  pb-3 w-full focus-outline-none"/>
         <div class="flex item-center">
           <i class="text-lg text-blue-400 mr-4 far fa-image"></i>
           <i class="text-lg text-blue-400 mr-4 fas fa-film"></i>
           <i class="text-lg text-blue-400 mr-4 far fa-chart-bar"></i>
           <i class="text-lg text-blue-400 mr-4 far fa-smile"></i>
         </div>
         <button type="sumbit" class="h-10 px-4 text-white rounded-full font-semibold bg-blue-500 hover:bg-darkblue-400 focus-outline-none absolute bottom-0 right-0" >Tweet</button>
       </form>
     </div>
      <div class="flex flex-col-reverse">
        <div v-for="tweet in tweets" :key="tweet" class="w-full p-4 border-b hover:bg-gray-300 flex">
          <div class="flex-none mr-4">
            <img src="profile.jpg" class="h-12 w-12 rounded-full flex-none"/>
          </div>
          <div class="w-full">
            <div class="flex items-center w-full">
              <p class="font-semibold"> Adedire Solomon </p>
              <p class="text-sm text-gray-500 ml-2"> @enigmabrother </p>
              <p class="text-sm text-gray-500 ml-2"> 1 sec </p>
              <i class="fas fa-angle-down text-500 ml-auto"></i>
            </div>
            <p class="py-2">
              {{ tweet.content }}
            </p>
            <div class="flex items-center justify-between w-full">
              <div class="flex items-center text-sm text-gray-500">
                <i class="far fa-comment mr-3"></i>
                <p> 0 </p>
              </div>
              <div class="flex items-center text-sm text-gray-500">
                <i class="fas fa-retweet mr-3"></i>
                <p> 0 </p>
              </div>
              <div class="flex items-center text-sm text-gray-500">
                <i class="fas fa-heart mr-3"></i>
                <p> 1 </p>
              </div>
              <div class="flex items-center text-sm text-gray-500">
                <i class="fas fa-share-square mr-3"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div v-for="follow in following" :key="follow" class="w-full p-4 border-b hover:bg-gray-300 flex ">
        <div class="flex-none mr-4">
         <img :src="`${follow.src}`" class="h-12 w-12 rounded-full flex-none"/>
        </div>
        <div class="w-full"> 
            <div class="flex items-center w-full"> 
             <p class="font-semibold">{{follow.name}}</p>
             <p class="text-sm text-gray-500 ml-2">{{follow.handle}}</p>
             <p class="text-sm text-gray-500 ml-2">{{follow.time}}</p>
             <i class="fas fa-angle-down ml-auto text-gray-500"></i>
            </div>
            <p class="py-2">
              {{follow.tweet}}
              </p>
              <div class="flex items-center justify-between w-full ">
                <div class="flex item-center text-sm text-gray-500">
                  <i class=" far fa-comment mr-3"></i>
                  <p>{{follow.comments}}</p>
               
                </div>
                <div class="flex item-center text-sm text-gray-500">
                  <i class=" fas fa-retweet mr-3"></i>
                  <p>{{follow.retweet}}</p>
               
                </div>
                <div class="flex item-center text-sm text-gray-500">
                  <i class=" fas fa-heart mr-3"></i>
                  <p>{{follow.like}}</p>
               
                </div>
                <div class="flex item-center text-sm text-gray-500">
                  <i class=" fas fa-share-square mr-3"></i>
                
               
                </div>
              </div>
        </div>
    </div>
    </div>
    <!-----trending section---->

    <div class=" overflow-y-scroll md:block hidden w-1/3 h-full border-l border-lighter py-2 px-6  relative">
        <input class= "pl-12 rounded-full w-full p-2 bg-blue-100 text-md " placeholder="Search Twitter"/> 
        <i class="fas fa-search absolute left-0 top-0 mt-5 ml-12 text-sm text-gray-500"></i>
        <div class="w-full rounded-lg bg-blue-100 mt-5 ">
          <div class="flex items-center justify-between p-3">
            <p class="text-lg font-bold text-blue-500">Trends For You</p> 
            <i class="fas fa-cog text-lg text-blue-400"></i>
          </div>
          <button v-for="trend in trending " :key="trend" class="w-full flex justify-between hover:bg-blue-200 p-3 border-t border-blue-200 focus:outline-none">
            <div>
              <p class="text-sm text-left leading-tight text-gray-500">{{trend.top}}</p>
              <p class="font-bold text-left leading-tight">{{trend.title}}</p>
              <p class="text-left leading-tight text-gray-500">{{trend.bottom}}</p>
              </div>
              <i class="fas fa-angle-down text-lg text-dark-300"></i>
          </button>
          <button class="p-3 w-full hover:bg-blue-200 text-left text-blue-500 border-t border-blue-200 focus:outline-none">
            Show more
          </button> 
        </div>
         <div class="w-full rounded-lg bg-blue-100 mt-5 ">
          <div class="flex items-center justify-between p-3">
            <p class="text-lg font-bold text-blue-500">Who To Follow</p> 
        
          </div>
          <button v-for="friend in friends " :key="friend" class="w-full flex justify-between hover:bg-blue-200 p-3 border-t border-blue-200 focus:outline-none">
           <img :src="`${ friend.src }`" class="w-12 h-12 rounded-full border border-lighter" />
              <div class="hidden lg:block ml-4">
              <p class="text-sm font-bold leadind-tight">{{friend.name}}</p>
              <p class="text-sm leadind-tight">{{friend.handle}}</p>
              </div>
            <button class="ml-auto text-sm text-blue-500 py-1 px-4 hover:bg-blue-500 hover:text-white rounded-full border-2 border-blue-500 focus:outline-none ">
            Follow
          </button>
          </button>
          <button class="p-3 w-full hover:bg-blue-200 text-left text-blue-500 border-t border-blue-200 focus:outline-none">
            Show more
          </button> 
        </div>
        
    </div>
</div>
  


</template>

<script>

export default {
  name: 'app',
  components: {
  },
  data () {
    return{
      tabs:[
        {icon: 'fas fa-home', title: 'Home', id:'home'},
        {icon: 'fas fa-hashtag', title: 'Explore', id: 'explore'},
        {icon: 'far fa-bell', title: 'Notifications', id: 'notifications'},
        {icon: 'far fa-envelope', title: 'Messages', id: 'messages'},
        {icon: 'far fa-bookmark', title: 'Bookmarks', id: 'bookmarks'},
        {icon: 'fas fa-clipboard-list', title: 'Lists', id: 'lists'},
        {icon: 'far fa-user', title: 'Profile', id: 'profile'},
        {icon: 'fas fa-ellipsis-h', title: 'More', id: 'more'}
      ],
      id: 'home',
      dropdown:false,
      trending:[
        {top: 'Treading in Nigeria', title: 'Buhari', bottom:'Treading with: President Buhari'},
        {top: 'Music', title: 'UY Scuti', bottom:'13k Tweets'},
        {top: 'Pop', title: 'Blue Ivy', bottom:'40k Tweets'},
        {top: 'Treading in US', title: 'Denim Day', bottom:'40k Tweets'},
        {top: 'Treading', title: 'Tech', bottom:'23.4k Tweets'},
      ],
      friends:[
        {src: 'elon.jpg', name:'Elon Musk', handle:'@testlaBoy'},
        {src: 'monk.jpg', name:'Adrian Monk', handle:'@detective:)'},
        {src: 'kevin.jpg', name:'Kevin Hart', handle:'@miniRock'},
      ],
      following: [
        {src: 'elon.jpg', name: 'Elon Musk', handle: '@teslaBoy', time: '20 min', tweet: 'Should I just quarantine on mars??', comments: '1,000', retweets: '550', like: '1,000,003'},
        {src: 'kevin.jpg', name: 'Kevin Hart', handle: '@miniRock', time: '55 min', tweet: 'Should me and the rock do another sub-par movie together????', comments: '2,030', retweets: '50', like: '20,003'},
        {src: 'elon.jpg', name: 'Elon Musk', handle: '@teslaBoy', time: '1.4 hr', tweet: 'Haha just made a flame thrower. Shld I sell them?', comments: '100,000', retweets: '1,000,002', like: '5,000,003'},
        {src: 'elon.jpg', name: 'Elon Musk', handle: '@teslaBoy', time: '1.4 hr', tweet: 'Just did something crazyyyyyyy', comments: '100,500', retweets: '1,000,032', like: '5,000,103'}
      ],
      tweets:[
        {content: ' It is so nice outside'}
      ],
      tweet:{content: ''}
    }
  },
  methods: {
    addNewTweet () {
      let newTweet = {
        content: this.tweet.content
      };
      this.tweets.push(newTweet)
    }
  }
}
</script>
