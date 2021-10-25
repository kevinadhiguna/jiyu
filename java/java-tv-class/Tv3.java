/**
 * YOU CAN USE ANY CODE FROM THIS REPOSITORY BUT PLEASE DO NOT REMOVE CREDIT TO THE AUTHOR. 
 * GitHub : kevinadhiguna (https://github.com/kevinadhiguna)
 * GitHub Repo : https://github.com/kevinadhiguna/jiyu
 */

public class Tv3 {
    int channel = 40;
    int volume = 4;

    // Change channel
    public void channelDown() {
        channel = 35;
    }
    // Change volume
    public void volumeUp() {
        volume = 6;
    }
    public static void main (String[] args) {
        Tv3 myTv3 = new Tv3();
        
        System.out.println("Current TV channel : " + myTv3.channel);
        System.out.println("Current TV volume : " + myTv3.volume);

        myTv3.channelDown();
        System.out.println("TV channel has been changed to : " + myTv3.channel);
        
        myTv3.volumeUp();
        System.out.println("TV volume has been increased to : " + myTv3.volume);
    }
}
