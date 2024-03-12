function a() {
    this.site = 'Kai Doe';

    function b(){
        console.log(this.site);
    }

    b();
}

var site = 'Wikipedia';
a(); (1) // Kai Doe
