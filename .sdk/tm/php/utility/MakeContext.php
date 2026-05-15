<?php
declare(strict_types=1);

// QrCodeGenerator SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class QrCodeGeneratorMakeContext
{
    public static function call(array $ctxmap, ?QrCodeGeneratorContext $basectx): QrCodeGeneratorContext
    {
        return new QrCodeGeneratorContext($ctxmap, $basectx);
    }
}
