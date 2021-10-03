/**
 * YOU CAN USE ANY CODE FROM THIS REPOSITORY BUT PLEASE DO NOT REMOVE CREDIT TO THE AUTHOR. 
 * GitHub : kevinadhiguna (https://github.com/kevinadhiguna)
 * GitHub Repo : https://github.com/kevinadhiguna/jiyu
 */

public class Tv4 {
    int channel = 100;
    int volume = 5;

    public void channelUp() {
        channel = 115;
    }
    public void volumeDown () {
        volume = 1;
    }
    public void volumeUp() {
        volume = 3;
    }
    public static void main (String[] args) {
        Tv4 myTv = new Tv4();

        System.out.println("Initial Tv 4 channel : " + myTv.channel);
        System.out.println("Initial Tv 4 volume : " + myTv.volume);

        myTv.channelUp();
        System.out.println("Tv 4 channel has been changed to : " + myTv.channel);

        myTv.volumeDown();
        System.out.println("Tv 4 volume has been down to : " + myTv.volume);

        myTv.volumeUp();
        System.out.println("Tv 4 volume has been increased to : " + myTv.volume);
    }
}
