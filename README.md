I/ URL du site web:

http://prachith.projetsmmichamps.fr



II – Procédure d’installation d’une archive sur un serveur local XAMPP


Étape 1 – Installation et lancement de XAMPP

1 - Télécharger et installer XAMPP avec un compte administrateur via ce https://www.apachefriends.org/fr/index.html.
Lors de l’installation, seuls les composants nécessaires seront conservés (Apache, MySQL, PHP).
Les composants Tomcat, Perl, Mercury Mail et Fake Sendmail seront décochés car ils ne sont pas nécessaires.

2 - Noter le chemin d’installation de XAMPP (par défaut : C:\xampp), qui sera utilisé pour accéder aux dossiers du serveur.

3 - Autoriser les modifications demandées par le pare-feu Windows, notamment pour les ports 80 et 443 utilisés par le serveur web Apache.

4 - Ouvrir le panneau de contrôle XAMPP et démarrer les services Apache et MySQL en cliquant sur Start.



Étape 2 – Dépôt de l’archive du site sur le serveur local

1 - Accéder au dossier du serveur web local :
C:\xampp\htdocs

2 - Créer un dossier nommé SiteMMI1 afin d’organiser les sites hébergés localement.

3 - Déposer l’archive du site ("Sae105.zip", récupérée sur la plateforme e-learning) dans le dossier SiteMMI1.

4 - Extraire l’archive afin d’obtenir le dossier du site, qui doit contenir un fichier index.html.

5 - Tester l’accès au site dans un navigateur à l’adresse suivante :

http://localhost/SiteMMI1/Sae105



Optionnel : 

Étape 3 – Création d’un alias pour simplifier l’accès au site

1 - Accéder au fichier de configuration d’Apache :
C:\xampp\apache\conf\httpd.conf

2 - Effectuer une copie de sauvegarde du fichier avant toute modification.

3 - Ouvrir le fichier httpd.conf avec le Bloc-notes et rechercher la section <IfModule alias_module>.

4 - Ajouter la ligne suivante dans cette section afin de créer un alias :
Alias "/Lucas" "C:/xampp/htdocs/SiteMMI1/Sae105"

5 - Enregistrer le fichier puis redémarrer le serveur Apache depuis le panneau de contrôle XAMPP.



Méthode d'accès au site : 

Si l’alias a été créé, le site est accessible à l’adresse :
http://localhost/Lucas


Sans alias, le site reste accessible via l’URL complète :
http://localhost/SiteMMI1/Sae105


Il est également possible d’accéder au site via l’adresse IP de la machine, obtenue à l’aide de la commande ipconfig :
http://votreIP/SiteMMI1/Sae105 ou http://votreIP/Lucas



III/ Lien vers doc Notion sur les tableaux des règles opquast

https://www.notion.so/Opquast-SA-1-05-Ta-passion-en-images-2d64f307133a8184aaf5e8168c967da5?source=copy_link