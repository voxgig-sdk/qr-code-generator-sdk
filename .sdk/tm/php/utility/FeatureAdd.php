<?php
declare(strict_types=1);

// QrCodeGenerator SDK utility: feature_add

class QrCodeGeneratorFeatureAdd
{
    public static function call(QrCodeGeneratorContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
