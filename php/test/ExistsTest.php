<?php
declare(strict_types=1);

// QrCodeGenerator SDK exists test

require_once __DIR__ . '/../qrcodegenerator_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = QrCodeGeneratorSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
