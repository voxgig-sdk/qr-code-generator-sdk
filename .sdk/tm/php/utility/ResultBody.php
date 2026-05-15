<?php
declare(strict_types=1);

// QrCodeGenerator SDK utility: result_body

class QrCodeGeneratorResultBody
{
    public static function call(QrCodeGeneratorContext $ctx): ?QrCodeGeneratorResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
