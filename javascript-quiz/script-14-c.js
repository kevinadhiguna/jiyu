function a() {
    this.site = 'Kai Doe';

    function b(){
        console.log(this.site);
    }

    b();
}

let site = 'MLB';
new a(); (3) // undefined
