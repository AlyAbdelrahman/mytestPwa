self.addEventListener('install',function(event){
    console.log('sw installed');
    event.waitUntil(
        caches.open('static')
        .then(function(cache){
            // cache.add('/');
            // cache.add('index.html');
            // cache.add('index.js');
     
            cache.addAll([
                '/',
                'index.html',
                'index.js',
                'css/site.css',
                'images/front-icons/big-data.png',
                'css/bootstrap.min.css',
                'css/carousel.css',
                'css/custom.css'
               
    
    
            ])
        })
        .then(console.log('cashed'))
    );
   
});

self.addEventListener('activate',function(){
    console.log('sw Activated')
});

self.addEventListener('fetch',function(event){
   event.respondWith(
    caches.match(event.request)
    .then(function(res){
        if(res){
            return res;
            
        }else{
            return fetch(event.request);
        }
    })
   );
})