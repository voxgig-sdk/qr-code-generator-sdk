<?php
declare(strict_types=1);

// QrCodeGenerator SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class QrCodeGeneratorFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new QrCodeGeneratorBaseFeature();
            case "test":
                return new QrCodeGeneratorTestFeature();
            default:
                return new QrCodeGeneratorBaseFeature();
        }
    }
}
