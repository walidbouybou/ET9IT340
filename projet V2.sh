#!/bin/bash

# Fonction pour formater une chaîne en minuscules et retirer certains caractères spéciaux : Supprime les caractères spéciaux et convertit en minuscules
format_chaine() {
    echo "${1//[^a-zA-Z0-9]/}" | tr '[:upper:]' '[:lower:]'
}
# Fonction pour vérifier et créer un groupe si nécessaire
verifier_et_creer_groupe() {
    grep -q "^$1" /etc/group || groupadd "$1"
}
# Traitement du fichier CSV
while IFS=";" read -r nom_utilisateur prenom_utilisateur mot_de_passe lieu; do 
    # Construction du nom d'utilisateur en format standard
    nom_complet_utilisateur="$(format_chaine "${nom_utilisateur}_${prenom_utilisateur}")"
    # Mise en forme du lieu en format standard
    lieu=$(format_chaine "$lieu")
    # Vérification de l'existence de l'utilisateur
    if grep -q "^$nom_complet_utilisateur" /etc/passwd; then
        # Si l'utilisateur existe, vérification du lieu
        if [ "$lieu" = "-" ]; then
            # Archiver et supprimer l'utilisateur s'il est dans le lieu "-"
            tar cvf "/home/$lieu/$nom_complet_utilisateur" "/archives/${nom_complet_utilisateur}_$(date +%F).tar.gz"
            userdel -r "$nom_complet_utilisateur"
            echo "L'utilisateur $nom_complet_utilisateur a été archivé et supprimé"
        else
            # Vérifier si le lieu a changé
            groupe=$(grep "$nom_complet_utilisateur" /etc/group | cut -f1,1 -d:)
            [ "$lieu" != "$groupe" ] && { verifier_et_creer_groupe "$lieu"; usermod -g "$lieu" "$nom_complet_utilisateur"; }
        fi
    else
        # Si l'utilisateur n'existe pas, vérification du lieu
        [ "$lieu" != "-" ] && { verifier_et_creer_groupe "$lieu"; useradd -s /bin/bash -d "/home/$lieu/$nom_complet_utilisateur" -g "$lieu" "$nom_complet_utilisateur"; echo "$mot_de_passe" | passwd --stdin "$nom_complet_utilisateur"; passwd -f "$nom_complet_utilisateur"; echo "L'utilisateur $nom_complet_utilisateur a été créé dans le groupe $lieu"; }
    fi 
done < <(tail -n +2 pa.csv)
