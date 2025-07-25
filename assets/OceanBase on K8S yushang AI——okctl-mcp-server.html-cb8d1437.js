import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, e as createStaticVNode, b as createBaseVNode, d as createTextVNode, a as createVNode } from "./app-24108d2f.js";
const _imports_0 = "/assets/image-5-c3950dc6.png";
const _imports_1 = "/assets/image-6-bb68736a.png";
const _imports_2 = "/assets/image-7-199a0e01.png";
const _imports_3 = "/assets/image-8-600bf931.png";
const _imports_4 = "/assets/image-9-e2b3dd8c.png";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://github.com/oceanbase/mcp-oceanbase",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://github.com/oceanbase/mcp-oceanbase",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = {
  href: "https://github.com/oceanbase/ob-operator",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = {
  href: "https://github.com/oceanbase/mcp-oceanbase",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _cache[12] || (_cache[12] = createStaticVNode('<h1 id="oceanbase-on-k8s-遇上-ai——okctl-mcp-server" tabindex="-1"><a class="header-anchor" href="#oceanbase-on-k8s-遇上-ai——okctl-mcp-server" aria-hidden="true">#</a> OceanBase on K8S 遇上 AI——okctl-mcp-server</h1><h2 id="笔者简介" tabindex="-1"><a class="header-anchor" href="#笔者简介" aria-hidden="true">#</a> 笔者简介</h2><p>笔者目前就读于武汉大学研究生二年级，是OceanBase cloud native sig的一员，也是OceanBase社区的贡献者一枚，目前对AI、向量数据库、云原生等领域都很感兴趣，并在积极探索中。</p><h2 id="前情提要" tabindex="-1"><a class="header-anchor" href="#前情提要" aria-hidden="true">#</a> 前情提要</h2><h3 id="什么是okctl" tabindex="-1"><a class="header-anchor" href="#什么是okctl" aria-hidden="true">#</a> 什么是okctl</h3><p>okctl是与ob-operator配套的命令行管理工具，全名为OceanBase Kubernetes Control Tool， 它诞生于2024年的开源之夏项目中，可以实现集群管理、租户资源管理、备份策略资源管理、组件管理等多项功能，同时，它还可以提供本地组件的版本检查及更新，以及建议搭建集群和配套租户的命令，适用于ob on k8s的资源管控。</p><h3 id="为什么需要okctl-mcp-server" tabindex="-1"><a class="header-anchor" href="#为什么需要okctl-mcp-server" aria-hidden="true">#</a> 为什么需要okctl-mcp-server</h3><p>MCP（Model Context Protocol）协议由Anthropic提出，旨在为AI与其他数据源之间提供一种统一、标准且安全的数据连接方式，使得AI可以集成文件系统、数据库，以及各种现有系统，等等。MCP协议可以作为大模型的手和脚，使得大模型的能力大大提升。 2025年被称为agent元年，MCP协议的出现也使得各家公司纷纷提出自己的MCP服务器，包括各个数据库厂商。因此，我有想法去实现okctl的mcp server，作为一次AI在运维工作上的尝试。</p><p>言归正传，为什么需要okctl-mcp-server？在AI时代，随着各种AI IDE的出现，编码的门槛和成本逐渐降低，开发一个项目的速度越来越快，因此，在开发一个项目前，了解自己的目的，技术选型、以及系统架构则显得更为重要。</p><p>对于目前OB在K8S上的运维，主要有三种方式：</p><ol><li>传统的采用yaml的方式抛出资源与k8s进行交互</li><li>采用OB Dashboard（配套管理界面服务）在页面上进行操作</li><li>采用okctl命令行工具组合命令实现运维</li></ol><p>这三种方式各有利弊，首先，采用yaml的方式抛出资源与k8s进行交互，适合于对k8s的基础操作，以及ob的各种资源配置有深刻理解的用户；其次，dashboard则作为ob operator上的管理工具，可以采用页面的方式进行配置，非常适合对于一些精细配置的调控，也适合采用ob-operator的企业运维人员对集群进行管理；最后，是okctl，okctl设计的初衷是为了简化kubectl的使用，同时，也扩展相关的功能，如组件安装，简易集群搭建等等。</p><p>但随着后续的使用，我们发现，对于okctl而言，一些常见的命令和一些简单的配置，在日常中使用的频率是较高的，而对于一些较为精细的配置，例如完成对集群的zone资源的一些调控，则需要非常复杂的命令参数组合，同时也需要用户去阅读okctl的help命令所对应的相关文档，这很明显是对用户不友好的，也是该工具的不足之处。</p><p>那么，能否有一种方式，使得较为复杂的配置可以简单的完成？显然，MCP协议可以实现这一目标，因此我们的设想是，通过okctl-mcp-server的配置，使得较为复杂的资源运维操作可以用自然语言进行描述，并交由AI来完成，而okctl作为功能提供的底座，可以通过最少量的代码来为AI提供调用的能力，并且，也可以和其他mcp server进行集成，使得AI可以实现更加复杂的工作流。</p><p>另外，<strong>我目在OceanBase cloud native社区参与一年多，得到了社区的很多帮助，也希望为社区贡献自己的力量，多做一些尝试</strong>。</p><p>下面，我将讲解一下具体的设计思路。</p><h2 id="设计思路" tabindex="-1"><a class="header-anchor" href="#设计思路" aria-hidden="true">#</a> 设计思路</h2><h3 id="模块分析" tabindex="-1"><a class="header-anchor" href="#模块分析" aria-hidden="true">#</a> 模块分析</h3><p>主要的模块如下图所示：</p>', 19)),
    createBaseVNode("p", null, [
      _cache[1] || (_cache[1] = createBaseVNode(
        "img",
        {
          src: _imports_0,
          alt: "alt text"
        },
        null,
        -1
        /* HOISTED */
      )),
      _cache[2] || (_cache[2] = createTextVNode(" 其中，部分功能需要对齐okctl的实现，也就是底层调用okctl的命令，较为简单，部分功能则为后续编写，为了给AI提供更多的集群检测能力而设计。 目前代码已经合并到")),
      createBaseVNode("a", _hoisted_1, [
        _cache[0] || (_cache[0] = createTextVNode("mcp-oceanbase")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[3] || (_cache[3] = createTextVNode("仓库中，具体的实现细节可以参考该仓库。"))
    ]),
    _cache[13] || (_cache[13] = createStaticVNode('<h3 id="示例场景" tabindex="-1"><a class="header-anchor" href="#示例场景" aria-hidden="true">#</a> 示例场景</h3><ol><li>创建集群并查看状态 <img src="' + _imports_1 + '" alt="alt text"></li><li>连接到集群下指定租户并执行SQL语句 <img src="' + _imports_2 + '" alt="alt text"></li><li>修改租户密码，创建空备租户并实现主备租户切换 <img src="' + _imports_3 + '" alt="alt text"><img src="' + _imports_4 + '" alt="alt text"> 对于该操作，可以看到当租户密码修改未完成时，可以等待租户的操作完成，并再次尝试</li></ol><p>通过这三个简单的操作，可以看到，通过自然语言的交互，原本复杂的运维操作变得非常简单。</p><h3 id="其他优化" tabindex="-1"><a class="header-anchor" href="#其他优化" aria-hidden="true">#</a> 其他优化</h3><p>对于该项目，我们又进行了一些其他优化，用于为用户提供更好的使用体验。</p><p>首先，经过调研我们发现，对部分mcp client而言，装载的mcp server过多时，会出现问题，而okctl-mcp-server一个工具就提供了30多个tools，这是非常不利的，因此需要为用户提供动态加载的能力，从而实现灵活的配置，来避免tools过多时加载过慢的问题，只需要在启动时，在命令行添加对应的参数，选择要启动的模块即可。</p><p>其次，我们也做了对长任务的优化，对于每一个任务，处理的流程都是先调用相关工具，获得状态信息，并交由LLM进行处理，而对于部分操作：例如创建集群、更改集群来说，需要消耗大量的时间，短时间内的调用，返回的集群状态显然是不符合预期的，LLM会反复调用tool中的<code>show cluster</code>和<code>show tenant</code>函数去检查状态，而这样不断的调用，有一个最大的问题就是会消耗大量token，而这些显然也是无意义的。</p><p>为了解决该问题，我们想出的简单的解决办法就是当执行集群资源的创建更改等操作时，采用轮询的方式进行检测，直到集群的状态为<code>running</code>，再返回给LLM，这样可以避免无意义的token消耗，但这样的弊端是这两个操作的响应时间变长了。</p><h2 id="存在的问题" tabindex="-1"><a class="header-anchor" href="#存在的问题" aria-hidden="true">#</a> 存在的问题</h2><p>在介绍了上述优点之后，让我们来探讨一下不足。</p><p>目前来说，该工具有一定的局限性，首先体现在，运维操作相对于其他操作不同，它的成本较高，而LLM是概率模型，工具的调用，很大程度上依赖于AI的判断，甚至可以说依赖于LLM本身，以及prompt的编写，因此即便能通过学习和优化prompt的编写，仍然无法完全将运维的操作交由AI来执行，而只能作为辅助。</p><h2 id="写在最后" tabindex="-1"><a class="header-anchor" href="#写在最后" aria-hidden="true">#</a> 写在最后</h2>', 12)),
    createBaseVNode("p", null, [
      _cache[5] || (_cache[5] = createTextVNode("目前，改代码已经被合入")),
      createBaseVNode("a", _hoisted_2, [
        _cache[4] || (_cache[4] = createTextVNode("mcp-oceanbase")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[6] || (_cache[6] = createTextVNode("仓库，并在继续更新迭代中，另外，连接集群功能正在进行重构，后续会在okctl中实现该功能。"))
    ]),
    _cache[14] || (_cache[14] = createBaseVNode(
      "p",
      null,
      "希望未来随着LLM的不断发展和新技术、新的交互协议的迭代，我们可以得到更好的解决方案，并在AI运维的道路上进行更多探索。",
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[9] || (_cache[9] = createTextVNode("最后，希望OceanBase社区和cloud-native sig越来越好！ 如果你也对该项目感兴趣，请多多关注")),
      createBaseVNode("a", _hoisted_3, [
        _cache[7] || (_cache[7] = createTextVNode("ob-operator")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[10] || (_cache[10] = createTextVNode("和")),
      createBaseVNode("a", _hoisted_4, [
        _cache[8] || (_cache[8] = createTextVNode("mcp-oceanbase")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[11] || (_cache[11] = createTextVNode("仓库！"))
    ])
  ]);
}
const OceanBase_on_K8S_yushang_AI__okctlMcpServer_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "OceanBase on K8S yushang AI——okctl-mcp-server.html.vue"]]);
export {
  OceanBase_on_K8S_yushang_AI__okctlMcpServer_html as default
};
