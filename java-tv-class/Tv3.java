public class Tv3 {
    int channel = 40;
    int volume = 4;

    // Change channel
    public void channelDown() {
        // channel = 35;
        channel = channel - 5;
    }

    // Change volume
    public void volumeUp() {
        // volume = 6;
        volume = volume + 2;
    }
    public static void main (String[] args) {
        Tv3 myTv3 = new Tv3();
        
        System.out.println("Current TV channel : " + myTv3.channel);
        System.out.println("Current TV volume : " + myTv3.volume);

        myTv3.channelDown();
        myTv3.volumeUp();

        System.out.println("Last TV channel : " + myTv3.channel);
        System.out.println("Last TV volume : " + myTv3.volume);
    }
}
