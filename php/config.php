<?php
declare(strict_types=1);

// QrCodeGenerator SDK configuration

class QrCodeGeneratorConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "QrCodeGenerator",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://api.apgy.in",
                "auth" => [
                    "prefix" => "Bearer",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "qrn" => [],
                ],
            ],
            "entity" => [
        'qrn' => [
          'fields' => [],
          'name' => 'qrn',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => 'TEXT',
                        'kind' => 'query',
                        'name' => 'data',
                        'orig' => 'data',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 300,
                        'kind' => 'query',
                        'name' => 'size',
                        'orig' => 'size',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/qr/',
                  'parts' => [
                    'qr',
                  ],
                  'select' => [
                    'exist' => [
                      'data',
                      'size',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return QrCodeGeneratorFeatures::make_feature($name);
    }
}
