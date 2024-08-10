# Kurulum Talimatları

1. Güncelleme:

    ```bash
    sudo apt update && sudo apt upgrade -y
    ```

2. `curl` paketini yükleyin:

    ```bash
    sudo apt install curl -y
    ```

3. `nodepay_setup.sh` scriptini indirin:

    ```bash
    curl -O https://gist.githubusercontent.com/Bo0tstrap/479627be43db165b4016291ff76ea2f1/raw/eed5ade7f5aee685db1fd50ddbe60c324e209cf8/nodepay_setup.sh
    ```

4. İndirilen script'e çalıştırma izni verin:

    ```bash
    chmod +x nodepay_setup.sh
    ```

5. Yeni bir `screen` başlatın:

    ```bash
    screen -S nodepay
    ```

6. Scripti çalıştırın:

    ```bash
    ./nodepay_setup.sh
    ```
7. Gerekli izni verin:

    ```bash
    chmod +X Nodepay-cli/nodepay.py
    ```

8. Scripti çalıştırın:

    ```bash
    python3 Nodepay-cli/nodepay.py
    ```

Son komutta sizden np token isteyecek, nodepay dashboard a girip F12 yapıp şu kırmızı ile işaretlediğim yerden alın
    ![np](https://github.com/user-attachments/assets/731dd642-46f2-41f4-9de5-60df7e34a1bf)
