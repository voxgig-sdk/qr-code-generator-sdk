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
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'TEXT',
                        'kind' => 'query',
                        'name' => 'data',
                        'orig' => 'data',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                      [
                        'example' => 300,
                        'kind' => 'query',
                        'name' => 'size',
                        'orig' => 'size',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'active' => true,
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
                  'active' => true,
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
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
