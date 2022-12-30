package wcscda.dojo;

import java.awt.*;
import javax.swing.*;

public class HanoiTowerApp extends JFrame {
    public HanoiTowerApp(int nbDisks) {
        HanoiTowerDrawing htw = new HanoiTowerDrawing(nbDisks);
        add(htw);
        htw.setHanoiTower(new HanoiTower(nbDisks, htw));
        setResizable(false);
        pack();
        setTitle("Hanoi Tower");
        setLocationRelativeTo(null);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }

    public static void main(String[] args) {
        int nbDisks = 4;
        EventQueue.invokeLater(() -> { new HanoiTowerApp(nbDisks).setVisible(true); });
    }
}
