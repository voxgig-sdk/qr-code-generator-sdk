<?php
declare(strict_types=1);

// QrCodeGenerator SDK base feature

class QrCodeGeneratorBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(QrCodeGeneratorContext $ctx, array $options): void {}
    public function PostConstruct(QrCodeGeneratorContext $ctx): void {}
    public function PostConstructEntity(QrCodeGeneratorContext $ctx): void {}
    public function SetData(QrCodeGeneratorContext $ctx): void {}
    public function GetData(QrCodeGeneratorContext $ctx): void {}
    public function GetMatch(QrCodeGeneratorContext $ctx): void {}
    public function SetMatch(QrCodeGeneratorContext $ctx): void {}
    public function PrePoint(QrCodeGeneratorContext $ctx): void {}
    public function PreSpec(QrCodeGeneratorContext $ctx): void {}
    public function PreRequest(QrCodeGeneratorContext $ctx): void {}
    public function PreResponse(QrCodeGeneratorContext $ctx): void {}
    public function PreResult(QrCodeGeneratorContext $ctx): void {}
    public function PreDone(QrCodeGeneratorContext $ctx): void {}
    public function PreUnexpected(QrCodeGeneratorContext $ctx): void {}
}
