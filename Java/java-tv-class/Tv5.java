public class Tv5 {
    int channel = 40;
    int volume = 4;

    // Fungsi untuk menurunkan channel
    public void channelDown(int newChannel) {
        channel = newChannel;
    }

    // Fungsi untuk menaikkan volume
    public void volumeUp(int newVolume) {
        volume = newVolume;
    }

    // Fungsi Utama
    public static void main (String[] args) {
        // Pembuatan objek
        Tv5 myTv = new Tv5();

        System.out.println("Channel sebelumnya : " + myTv.channel);
        System.out.println("Volume sebelumnya : " + myTv.volume);

        myTv.channelDown(35);
        System.out.println("Channel saat ini : " + myTv.channel);
    }
}
