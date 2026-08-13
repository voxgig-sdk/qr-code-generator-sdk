# QrCodeGenerator SDK exists test

import pytest
from qrcodegenerator_sdk import QrCodeGeneratorSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = QrCodeGeneratorSDK.test(None, None)
        assert testsdk is not None
