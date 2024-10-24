<?php

namespace Viettuans\QuickComponent;

use Illuminate\Support\ServiceProvider;

class QuickComponentServiceProvider extends ServiceProvider
{
    public $packageName = 'quick-component';

    public function boot ()
    {
        $this->registerConfig();
        $this->registerTranslation();
        $this->registerViews();
        $this->publicLang();
        $this->publicAssets();
    }

    /**
     * Register config.
     *
     * @return void
     */
    protected function registerConfig()
    {
        $this->mergeConfigFrom(
            __DIR__."/../config/config.php",
            'quick-component'
        );
    }

    public function registerTranslation()
    {
        $this->loadTranslationsFrom(__DIR__.'/../lang', $this->packageName);
    }

    public function registerViews()
    {
        $this->loadViewsFrom(__DIR__.'/../resources/views', $this->packageName);
    }

    public function publicAssets()
    {
        $this->publishes([
            __DIR__.'/../resources/assets' => public_path('quick-component'),
        ], 'public');
    }

    public function publicLang()
    {
        $this->publishes([__DIR__.'/../resources/lang' => resource_path('lang')]);
    }
}
