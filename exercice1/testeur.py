import unittest
from unittest.mock import patch
from exercice1 import valider_le_pass

class Testeur(unittest.TestCase):

    @patch('builtins.input', return_value='TestPassword123!')
    def test_valider_le_pass_valid(self, mock_input):
        rules = {
            'password': 'TestPassword123!',
            'min_length': 8,
            'min_digits': 1,
            'min_letters': 1,
            'min_special_chars': 1,
            'special_chars': "$!"
        }
        is_valid, message = valider_le_pass(**rules)
        self.assertTrue(is_valid)
        self.assertEqual(message, "Le mot de passe est valide.")

    @patch('builtins.input', return_value='Short1')
    def test_valider_le_pass_short_length(self, mock_input):
        rules = {
            'password': 'Short1',
            'min_length': 8,
            'min_digits': 1,
            'min_letters': 1,
            'min_special_chars': 1,
            'special_chars': "$!"
        }
        is_valid, message = valider_le_pass(**rules)
        self.assertFalse(is_valid)
        self.assertEqual(message, "Le mot de passe doit contenir au moins 8 caractères.")



if __name__ == '__main__':
    unittest.main()
