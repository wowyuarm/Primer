/**
 * Primer Controller
 * 处理设计体系的切换、解剖视图和获取功能
 */

// Primer的CSS变量数据
const PRIMER_DATA = {
  'rams-60': {
    palette: [
      { name: 'background', value: '#F5F5F5', textColor: '#212121' },
      { name: 'surface', value: '#FFFFFF', textColor: '#212121' },
      { name: 'text-main', value: '#212121', textColor: '#FFFFFF' },
      { name: 'primary', value: '#E64A19', textColor: '#FFFFFF' },
      { name: 'secondary', value: '#757575', textColor: '#FFFFFF' },
      { name: 'accent', value: '#424242', textColor: '#FFFFFF' }
    ],
    typography: { primary: 'Helvetica Neue', scale: '1.200 (Minor Third)' },
    spacing: { unit: '4px', system: 'Linear (博朗计算器般的精确)' }
  },
  'ando-concrete': {
    palette: [
      { name: 'background', value: '#C9C9C9', textColor: '#2A2A2A' },
      { name: 'surface', value: '#D8D8D8', textColor: '#2A2A2A' },
      { name: 'text-main', value: '#2A2A2A', textColor: '#E5E5E5' },
      { name: 'primary', value: '#3D7EAA', textColor: '#FFFFFF' },
      { name: 'secondary', value: '#5A5A5A', textColor: '#FFFFFF' },
      { name: 'accent', value: '#8A8A8A', textColor: '#2A2A2A' }
    ],
    typography: { display: 'Cormorant Garamond', primary: 'Avenir Next', scale: '1.414 (Augmented Fourth)' },
    spacing: { unit: '8px', system: 'Geometric (几何倍增)' }
  },
  'barragan-wall': {
    palette: [
      { name: 'background', value: '#ED3D95', textColor: '#FFFFFF' },
      { name: 'surface', value: '#F5A623', textColor: '#FFFFFF' },
      { name: 'primary', value: '#0057A8', textColor: '#FFFFFF' },
      { name: 'secondary', value: '#7B2D8E', textColor: '#FFFFFF' },
      { name: 'terracotta', value: '#C75B39', textColor: '#FFFFFF' },
      { name: 'coral', value: '#FF6B5B', textColor: '#FFFFFF' }
    ],
    typography: { display: 'Montserrat', primary: 'Montserrat', scale: '1.618 (Golden Ratio)' },
    spacing: { unit: '10px', system: 'Rhythmic (节奏倍增)' }
  },
  'anderson-symmetry': {
    palette: [
      { name: 'background', value: '#F3E5AB', textColor: '#5C4B51' },
      { name: 'surface', value: '#E6D4A0', textColor: '#5C4B51' },
      { name: 'text-main', value: '#5C4B51', textColor: '#F3E5AB' },
      { name: 'primary', value: '#D1495B', textColor: '#FFFFFF' },
      { name: 'secondary', value: '#6B9080', textColor: '#FFFFFF' },
      { name: 'powder-blue', value: '#A8C5D9', textColor: '#5C4B51' },
      { name: 'dusty-rose', value: '#D4A5A5', textColor: '#5C4B51' }
    ],
    typography: { display: 'Futura PT', primary: 'Libre Baskerville', scale: '1.250 (Major Third)' },
    spacing: { unit: '5px', system: 'Regular (精确的度量)' }
  },
  'memphis-81': {
    palette: [
      { name: 'background', value: '#FDE849', textColor: '#000000' },
      { name: 'surface', value: '#FFFFFF', textColor: '#000000' },
      { name: 'primary', value: '#26ABE2', textColor: '#000000' },
      { name: 'accent-a', value: '#F15A24', textColor: '#000000' },
      { name: 'accent-b', value: '#ED1E79', textColor: '#FFFFFF' },
      { name: 'accent-c', value: '#8DC63F', textColor: '#000000' },
      { name: 'accent-d', value: '#9E5FC2', textColor: '#FFFFFF' }
    ],
    typography: { display: 'Cooper Black', primary: 'Poppins', scale: 'Irregular (故意打破规则)' },
    spacing: { unit: '8px', system: 'Irregular (故意不规则)' }
  },
  'mondrian-neoplast': {
    palette: [
      { name: 'background', value: '#FFFFFF', textColor: '#000000' },
      { name: 'red', value: '#DD0100', textColor: '#FFFFFF' },
      { name: 'blue', value: '#0000FF', textColor: '#FFFFFF' },
      { name: 'yellow', value: '#FECB00', textColor: '#000000' },
      { name: 'black', value: '#000000', textColor: '#FFFFFF' }
    ],
    typography: { display: 'Futura', primary: 'Futura', scale: '1.5 (Perfect Fifth)' },
    spacing: { unit: '10px', system: 'Grid Division (网格分割)' }
  },
  'hara-void': {
    palette: [
      { name: 'background', value: '#F7F6F3', textColor: '#2D2D2D' },
      { name: 'surface', value: '#FFFEF9', textColor: '#2D2D2D' },
      { name: 'text-main', value: '#2D2D2D', textColor: '#F7F6F3' },
      { name: 'primary', value: '#6B5344', textColor: '#FFFFFF' },
      { name: 'bamboo', value: '#D4C9B0', textColor: '#2D2D2D' },
      { name: 'stone', value: '#9A9590', textColor: '#FFFFFF' }
    ],
    typography: { display: 'Hiragino Mincho', primary: 'Hiragino Sans', scale: '1.125 (Major Second)' },
    spacing: { unit: '8px', system: 'Breathing (呼吸的节奏)' }
  },
  'vignelli-canon': {
    palette: [
      { name: 'background', value: '#FFFFFF', textColor: '#000000' },
      { name: 'surface', value: '#FFFFFF', textColor: '#000000' },
      { name: 'text-main', value: '#000000', textColor: '#FFFFFF' },
      { name: 'primary', value: '#FF0000', textColor: '#FFFFFF' },
      { name: 'border', value: '#000000', textColor: '#FFFFFF' }
    ],
    typography: { primary: 'Helvetica', scale: '1.333 (Perfect Fourth)' },
    spacing: { unit: '8px', system: 'Grid Multiples (网格倍数)' }
  },
  'neon-noir': {
    palette: [
      { name: 'background', value: '#0D0D0D', textColor: '#E8E8E8' },
      { name: 'surface', value: '#141414', textColor: '#E8E8E8' },
      { name: 'text-main', value: '#E8E8E8', textColor: '#0D0D0D' },
      { name: 'primary', value: '#00F0FF', textColor: '#0D0D0D' },
      { name: 'secondary', value: '#FF00FF', textColor: '#0D0D0D' },
      { name: 'accent', value: '#FF3366', textColor: '#0D0D0D' }
    ],
    typography: { display: 'Orbitron', primary: 'Inter', scale: '1.414 (Augmented Fourth)' },
    spacing: { unit: '8px', system: 'Modular (模块化)' }
  },
  'gatsby-deco': {
    palette: [
      { name: 'background', value: '#0A1628', textColor: '#F5F5F0' },
      { name: 'surface', value: '#132238', textColor: '#F5F5F0' },
      { name: 'text-main', value: '#F5F5F0', textColor: '#0A1628' },
      { name: 'primary', value: '#D4AF37', textColor: '#0A1628' },
      { name: 'secondary', value: '#8B4D6E', textColor: '#F5F5F0' },
      { name: 'accent', value: '#2C7A7B', textColor: '#F5F5F0' }
    ],
    typography: { display: 'Playfair Display', primary: 'Lato', scale: '1.414 (Augmented Fourth)' },
    spacing: { unit: '8px', system: 'Symmetric (对称网格)' }
  }
};

class PrimerController {
  constructor() {
    this.primers = window.PRIMERS || [];
    this.currentIndex = window.INITIAL_INDEX || 0;
    this.isAnimating = false;
    
    this.stage = document.querySelector('.primer-stage');
    this.overlay = document.querySelector('.dissect-overlay');
    
    this.init();
  }

  init() {
    this.bindNavigation();
    this.bindDissect();
    this.bindAcquire();
  }

  bindNavigation() {
    // 左右箭头按钮导航
    const prevBtn = document.querySelector('.nav-prev');
    const nextBtn = document.querySelector('.nav-next');
    
    prevBtn?.addEventListener('click', () => this.prev());
    nextBtn?.addEventListener('click', () => this.next());

    // 点击导航点
    document.querySelectorAll('.nav-dot').forEach(dot => {
      dot.addEventListener('click', () => {
        this.goTo(parseInt(dot.dataset.index));
      });
    });
  }

  bindDissect() {
    const trigger = document.querySelector('.dissect-trigger');
    const closeBtn = document.querySelector('.dissect-close');

    trigger?.addEventListener('click', () => this.openDissect());
    closeBtn?.addEventListener('click', () => this.closeDissect());

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.overlay?.classList.contains('active')) {
        this.closeDissect();
      }
    });
  }

  bindAcquire() {
    document.querySelectorAll('.action-btn').forEach(btn => {
      btn.addEventListener('click', () => this.handleAcquire(btn.dataset.action));
    });
  }

  next() {
    this.goTo((this.currentIndex + 1) % this.primers.length);
  }

  prev() {
    this.goTo((this.currentIndex - 1 + this.primers.length) % this.primers.length);
  }

  goTo(index) {
    if (index === this.currentIndex || this.isAnimating) return;
    this.isAnimating = true;
    this.currentIndex = index;
    this.updateUI();
    setTimeout(() => this.isAnimating = false, 600);
  }

  updateUI() {
    const primer = this.primers[this.currentIndex];
    if (!primer) return;

    // 更新主题属性
    document.documentElement.setAttribute('data-primer', primer.slug);

    // 更新显示内容
    const update = (sel, val) => {
      const el = document.querySelector(sel);
      if (el) el.textContent = val;
    };

    update('.primer-index', String(this.currentIndex + 1).padStart(2, '0'));
    update('.primer-name', primer.name);
    
    const philParts = primer.philosophy.split('—');
    update('.philosophy-text', philParts[0]?.trim() || primer.philosophy);
    update('.philosophy-translation', philParts[1] ? `— ${philParts[1].trim()}` : '');
    update('.primer-inspiration .value', primer.inspiration);
    update('.constraint-value', primer.constraint);

    // 更新关键词
    const keywordsContainer = document.querySelector('.primer-keywords');
    if (keywordsContainer) {
      keywordsContainer.innerHTML = primer.keywords
        .map(k => `<span class="keyword">${k}</span>`)
        .join('');
    }

    // 更新导航点
    document.querySelectorAll('.nav-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === this.currentIndex);
    });
  }

  openDissect() {
    if (!this.overlay) return;
    this.overlay.hidden = false;
    requestAnimationFrame(() => {
      this.overlay.classList.add('active');
    });
    document.body.style.overflow = 'hidden';
    this.populateDissect();
  }

  closeDissect() {
    if (!this.overlay) return;
    this.overlay.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => this.overlay.hidden = true, 400);
  }

  populateDissect() {
    const primer = this.primers[this.currentIndex];
    const data = PRIMER_DATA[primer.slug];
    if (!primer || !data) return;

    // 哲学描述
    const philBody = document.querySelector('.philosophy-body');
    if (philBody) philBody.textContent = primer.philosophy;

    // 调色板
    const paletteGrid = document.querySelector('.palette-grid');
    if (paletteGrid && data.palette) {
      paletteGrid.innerHTML = data.palette.map(c => `
        <div class="palette-swatch" style="background:${c.value};color:${c.textColor}">
          <span class="swatch-name">--color-${c.name}</span>
          <span class="swatch-value">${c.value}</span>
        </div>
      `).join('');
    }

    // 字体
    const typoShowcase = document.querySelector('.typography-showcase');
    if (typoShowcase && data.typography) {
      typoShowcase.innerHTML = `
        ${data.typography.display ? `<div class="type-sample"><span class="type-label">Display</span><span style="font-family:${data.typography.display}">${data.typography.display}</span></div>` : ''}
        <div class="type-sample"><span class="type-label">Primary</span><span style="font-family:${data.typography.primary}">${data.typography.primary}</span></div>
        <div class="type-sample"><span class="type-label">Scale</span><span>${data.typography.scale}</span></div>
      `;
    }

    // 间距
    const spacingShowcase = document.querySelector('.spacing-showcase');
    if (spacingShowcase && data.spacing) {
      spacingShowcase.innerHTML = `
        <div class="type-sample"><span class="type-label">Unit</span><span>${data.spacing.unit}</span></div>
        <div class="type-sample"><span class="type-label">System</span><span>${data.spacing.system}</span></div>
      `;
    }
  }

  async handleAcquire(action) {
    const primer = this.primers[this.currentIndex];
    
    switch (action) {
      case 'copy-css':
        await this.copyCSSVariables(primer.slug);
        break;
      case 'download-json':
        this.downloadJSON(primer.slug);
        break;
      case 'copy-cli':
        await this.copyCLI(primer.slug);
        break;
    }
  }

  async copyCSSVariables(slug) {
    try {
      const response = await fetch(`/primers/${slug}/theme.css`);
      const css = await response.text();
      await navigator.clipboard.writeText(css);
      this.showToast('CSS Variables copied!');
    } catch (e) {
      // 备用：复制内联数据
      const data = PRIMER_DATA[slug];
      const cssVars = data.palette.map(c => `--color-${c.name}: ${c.value};`).join('\n');
      await navigator.clipboard.writeText(cssVars);
      this.showToast('CSS Variables copied!');
    }
  }

  async downloadJSON(slug) {
    try {
      const response = await fetch(`/primers/${slug}/tokens.json`);
      const json = await response.text();
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${slug}-tokens.json`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      this.showToast('Download failed');
    }
  }

  async copyCLI(slug) {
    const cmd = `npx primer-cli add ${slug}`;
    await navigator.clipboard.writeText(cmd);
    this.showToast('CLI command copied!');
  }

  showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'primer-toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
  }
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  new PrimerController();
});
