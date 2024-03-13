function a() {
    this.site = 'Kai Doe';

    function b(){
        console.log(this.site);
    }

    b();
}

var site = 'MLB';
new a(); (2) // undefined
