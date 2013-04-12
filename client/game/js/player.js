var Player = function() {
    this.id = null;
    this.model =
    {		
        objects : new THREE.Object3D(),
        motion  : 'stand',
        state   : 'stand'
    };
    this.position = 
    {
        x : 0,
        y : 0,
        z : 0,
        direction : 0
    };
    this.camera =
    {
        speed : 300,
        distance : 5,
        x : 0,
        y : 0,
        z : 0
    };
};

Player.prototype.foo = function() {

};
