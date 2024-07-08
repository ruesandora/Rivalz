# Network3 Ubuntu Kurulum Rehberi


### Node'u İndirme


1. **Tar Dosyasını İndirin:**
   - `wget` komutunu kullanarak tar dosyasını indirin:
     ```bash
     wget https://network3.io/ubuntu-node-v1.1.tar
     ```

### Node'u Kurma


2. **Tar Dosyasını Çıkartın:**
   - `tar` komutunu kullanarak tar dosyasını çıkartın:
     ```bash
     tar -xf ubuntu-node-v1.1.tar
     ```
   - Bu komut `ubuntu-node` adında bir dizin oluşturacaktır.

3. **`ubuntu-node` Dizine Geçin:**
   - Yeni oluşturulan `ubuntu-node` dizinine geçin:
     ```bash
     cd ubuntu-node
     ```

4. **Node'u Başlatın:**
   - Node'u başlatmak için `manager.sh` scriptini çalıştırın:
     ```bash
     sudo bash manager.sh up
     ```
   - Terminalde `node is ready` ifadesini görene kadar bekleyin, bu node'un başarıyla başlatıldığını gösterir.
   - line:50 ifconfig not found hatası alanlar uygulasın.
     ```bash
      cd
      sudo apt-get update
      sudo apt-get install net-tools
      /sbin/ifconfig eth0 up
     ```
### Dashboard'a Erişme


2. **Başka Bir Makinede Tarayıcı Açın:**
   - Başka bir makinede herhangi bir web tarayıcısını açın.

3. **Dashboard URL'sini Ziyaret Edin:**
   - Şu URL'ye gidin:
     ```plaintext
     https://account.network3.ai/main?o=xx.xx.xx.xx:8080
     ```
   - `xx.xx.xx.xx` kısmını Ubuntu makinenizin gerçek IP adresiyle değiştirin.

Bu URL, diğer makineden Ubuntu node'unun dashboard'ına erişim sağlar.

---
