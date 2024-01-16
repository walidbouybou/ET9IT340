def valider_le_pass(password, min_length=8, min_digits=1, min_letters=1, min_special_chars=1, special_chars=None):
    if len(password) < min_length:
        return False, "Le mot de passe doit contenir au moins {} caractères.".format(min_length)

    digit_count = sum(c.isdigit() for c in password)
    if digit_count < min_digits:
        return False, "Le mot de passe doit contenir au moins {} chiffre(s).".format(min_digits)

    letter_count = sum(c.isalpha() for c in password)
    if letter_count < min_letters:
        return False, "Le mot de passe doit contenir au moins {} lettre(s).".format(min_letters)

    if special_chars:
        special_char_count = sum(c in special_chars for c in password)
        if special_char_count < min_special_chars:
            return False, "Le mot de passe doit contenir au moins {} caractère(s) spécial(aux).".format(min_special_chars)

    return True, "Le mot de passe est valide."
